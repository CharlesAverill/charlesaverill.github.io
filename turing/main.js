// Variables
var tapeElement = document.getElementById("tape");
var cellElements = [];
var tapeContents = [];
var tapeAppendIndex = -1;

var executionElement = document.getElementById("executionStatus");
var traceElement = document.getElementById("trace");

var speedSliderElement = document.getElementById("speedSlider");
var speedWarningElement = document.getElementById("speedWarning");

var pointerElement = document.getElementById("pointer");
var programElement = document.getElementById("program");

var pointerIndex = 0;

var programCounter = 0;
var programExecuting = false;
var programContents = [];
var programLabels = {};

var instructionDelayMilliseconds = 500;

// Frontend Logic
function onLoad() {
    for(var i = 0; i < 40; i++) {
        appendCell();
    }

    pointAt(pointerIndex);

    programCounter = 0;
}

function appendCell() {
    tapeAppendIndex++;

    var newCell = document.createElement("div");
    newCell.appendChild(document.createTextNode("0"));
    newCell.setAttribute("class", "cell");
    newCell.setAttribute("id", "cell_" + tapeAppendIndex);

    tapeElement.appendChild(newCell);

    tapeContents[tapeAppendIndex] = 0;
    cellElements[tapeAppendIndex] = newCell;
}

function pointAt(cellIndex) {
    var rect = cellElements[cellIndex].getBoundingClientRect();

    pointerElement.style.marginLeft = rect.width * cellIndex + "px";
}

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, ms);
    })
}

function setProgramStatus(status) {
    programExecuting = status;
    executionElement.style.backgroundColor = status ? "green" : "red";
    program.contentEditable = !status;
}

function appendToTrace(line) {
    trace.innerHTML += line + " <br>";
    trace.scrollTop = trace.scrollHeight;
}

// Program Parsing Logic
async function parseProgram() {
    setProgramStatus(true);

    programContents = programElement.innerText.split("\n");

    programLabels = {};
    for(var i = 0; i < programContents.length; i++) {
        var label = parseLabel(programContents[i]);

        if(label != null) {
            programLabels[label] = i;
        }
    }

    var waitCounter = -1;
    while(programExecuting) {
        parseLine(waitCounter++);
        await sleep(instructionDelayMilliseconds);
    }

    setProgramStatus(false);

    if(programCounter == programContents.length - 1) {
        programCounter = 0;
    }
}

function parseLine(waitCounter = 0) {
    if(programCounter >= programContents.length) {
        setProgramStatus(false);
        return;
    }

    var line = programContents[programCounter++];
    appendToTrace(line);

    // Skip if label or comment or not programExecuting
    if(line == null || parseLabel(line) || "#/".includes(line.charAt(0)) || !programExecuting) {
        return;
    }

    // Split line by whitespace
    var parts = line.split(/[ ]+/);

    // Switch by command
    switch(parts[0].toUpperCase()) {
        case "GOTO":
            if(programLabels.hasOwnProperty(parts[1])) {
                programCounter = programLabels[parts[1]];
            }
            break;
        case "GOTOIF":
            if(parts.length >= 3 && programLabels.hasOwnProperty(parts[2])) {
                console.log(parts[2] + " " + tapeContents[pointerIndex]);
                // Goto if condition is % and at index 0, or if condition matches current value
                if((parts[1] == "%" && pointerIndex == 0) ||
                        (parts[1] == tapeContents[pointerIndex])) {
                    programCounter = programLabels[parts[2]];
                }
            }
            break;
        case "BREAK":
            setProgramStatus(false);
            break;
        case "WRITE":
            setCellContents(pointerIndex, parts[1]);
            break;
        case "INCREMENT":
        case "INCR":
            if(isNaN(tapeContents[pointerIndex])) {
                if(tapeContents[pointerIndex] == "z") {
                    setCellContents(pointerIndex, 0);
                } else {
                    setCellContents(pointerIndex, String.fromCharCode(tapeContents[pointerIndex].charCodeAt(0) + 1));
                }
            } else {
                if(tapeContents[pointerIndex] == 9) {
                    setCellContents(pointerIndex, "a");
                } else {
                    setCellContents(pointerIndex, tapeContents[pointerIndex] + 1);
                }
            }
            break;
        case "DECREMENT":
        case "DECR":
            if(isNaN(tapeContents[pointerIndex])) {
                if(tapeContents[pointerIndex] == "a") {
                    setCellContents(pointerIndex, 9);
                } else {
                    setCellContents(pointerIndex, String.fromCharCode(tapeContents[pointerIndex].charCodeAt(0) - 1));
                }
            } else {
                if(tapeContents[pointerIndex] == 0) {
                    setCellContents(pointerIndex, "z");
                } else {
                    setCellContents(pointerIndex, tapeContents[pointerIndex] + 1);
                }
            }
            break;
        case "LEFT":
            pointerIndex = Math.max(0, pointerIndex - 1);
            pointAt(pointerIndex);
            break;
        case "RIGHT":
            if(pointerIndex >= tapeAppendIndex - 20) {
                appendCell();
            }

            pointAt(++pointerIndex);
            break;
        default:
            setProgramStatus(false);
    }
    //}, waitCounter * 0);
}

function setCellContents(index, newValue) {
    cellElements[index].innerText = newValue;
    tapeContents[index] = newValue;
}

function parseLabel(line) {
    if(line != null && line.includes(":")) {
        var label = line.slice(0, line.indexOf(":"));
        label = label.trim();

        return label;
    }

    return null;
}

// User Functions
async function Start() {
    appendToTrace("----------");
    await parseProgram();
}

function Stop() {
    setProgramStatus(false);
}

function Reset() {
    setProgramStatus(false);
    programCounter = 0;

    pointerIndex = 0;
    pointAt(pointerIndex);

    for(var i = 0; i < tapeAppendIndex + 1; i++) {
        setCellContents(i, 0);
    }

    console.log(tapeContents);
}

function Undo() {
    Stop();
    programCounter--;
    parseLine();
}

function ClearTrace() {
    trace.innerHTML = "";
}

function ChangeExecutionSpeed() {
    instructionDelayMilliseconds = speedSliderElement.value;
    if(speedSliderElement.value == 0) {
        speedWarning.hidden = false;
    } else {
        speedWarning.hidden = true;
    }
}

// Load
onLoad();

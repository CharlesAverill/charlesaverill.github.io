// Function to fetch tree data from a file
async function fetchTreeData() {
    try {
        const response = await fetch('tree.json');
        if (!response.ok) {
            throw new Error('Failed to fetch tree data');
        }
        return await response.json();
    } catch (error) {
        console.error(error.message);
        return {};
    }
}

function calculateRowsAndColumns(n) {
    // let bestRows = 1;
    // let bestCols = n;

    // for (let rows = 1; rows <= Math.sqrt(n); rows++) {
    //     if (n % rows === 0) {
    //         const cols = n / rows;

    //         // Check if the new arrangement is more square
    //         if (cols - rows < bestCols - bestRows) {
    //             bestRows = rows;
    //             bestCols = cols;
    //         }
    //     }
    // }

    // let bestRows = bestCols = Math.ceil(Math.sqrt(n));
    let bestCols = 2;
    let bestRows = n / bestCols;

    let flipped = false;
    return { rows: bestRows, columns: bestCols, flipped: flipped };
}

// Stack to keep track of navigation history
const navigationStack = [];

let root = {};
let globalTreeData = {};
let currentNode = '';
let reload = false;

// Function to generate and display buttons based on the selected node
async function displayTree(treeData, node) {
    if(treeData == null) {
        treeData = await fetchTreeData();
        root = treeData;
    }

    if(reload) {
        reload = false;
        treeData = globalTreeData;
        node = currentNode;
    }

    globalTreeData = treeData;
    currentNode = node;

    document.getElementById("cat-name").textContent = node == "root" ? "" : node;
    const treeNavigator = document.getElementById('treeNavigator');
    treeNavigator.innerHTML = '';

    const children = treeData[node];
    if (children && Object.keys(children).length > 0) {
        let { rows, columns, flipped } = calculateRowsAndColumns(Object.keys(children).length);
        const table = document.createElement('table');

        for (let i = 0; i < rows; i++) {
            const row = table.insertRow();
            for (let j = 0; j < columns; j++) {
                const index = i * columns + j;
                const childNode = Object.keys(children)[index];

                if (childNode) {
                    const button = document.createElement('button');
                    button.textContent = childNode;
                    button.addEventListener('click', () => {
                        navigationStack.push([treeData, node]);
                        displayTree(children, childNode);
                    });

                    const cell = row.insertCell();
                    cell.appendChild(button);
                }
            }
        }

        // Calculate dynamic button size based on the number of rows and columns
        if(flipped) {
            [rows, columns] = [columns, rows];
        }
        const buttonWidth = (1.0 / columns) * 75;
        const buttonHeight = (1.0 / rows) * 75;

        treeNavigator.appendChild(table);

        // Apply dynamic button size
        const buttons = document.querySelectorAll('button:not(.header-btn)');
        buttons.forEach(button => {
            const fontSize = buttonWidth * 0.5;
            button.style.width = `${buttonWidth}vw`;
            button.style.height = `${buttonHeight}vh`;
            button.style.fontSize = `${fontSize}px`;
        });
    }

    if (navigationStack.length > 0) {
        upButton.hidden = false;
    } else {
        upButton.hidden = true;
    }
}

function setupModal() {
    // Get the modal
    var modal = document.getElementById("add-item-modal");

    // Get the button that opens the modal
    var btn = document.getElementById("add-item-btn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.getElementById("add-item-form").addEventListener("submit", function(e) {
        e.preventDefault() // Cancel the default action
        addItem();

        modal.style.display = 'none';
    });
}

function addItem() {
    const itemName = document.getElementById("item-name").value;
    document.getElementById("item-name").value = "";

    if(globalTreeData[itemName]) {
        alert(`An item with the name "${itemName}" already exists`);
    } else {
        globalTreeData[currentNode][itemName] = {};
        reload = true;
        displayTree(globalTreeData, currentNode);
    }

    console.log(root);
}

function download(fileName) {
    let content = JSON.stringify(root);
    let contentType = "text/plain";
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

const upButton = document.getElementById("up-button");
upButton.addEventListener('click', () => {
    const treeAndNode = navigationStack.pop();
    displayTree(treeAndNode[0], treeAndNode[1]);
});

// Initial display with root nodes
displayTree(null, 'root');

setupModal();


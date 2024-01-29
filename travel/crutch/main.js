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
    let bestCols = 2;
    let bestRows = n / bestCols;

    let flipped = false;
    return { rows: bestRows, columns: bestCols, flipped: flipped };
}

function objectToMap(obj) {
    const map = new Map();

    for (const key in obj) {
        if (!Array.isArray(obj[key]) && typeof obj[key] === 'object' && obj[key] !== null) {
            map.set(key, objectToMap(obj[key]));
        } else {
            map.set(key, obj[key]);
        }
    }

    return map;
}

function mapToJSON(map, indent = 0) {
    let result = '{';

    if (Array.from(map.keys()).length == 0) {
        result += ",";
    } else {
        map.forEach((value, key) => {
            if (value instanceof Map) {
                result += `"${key}":${mapToJSON(value, indent + 1)},`;
            } else {
                result += `"${key}":${JSON.stringify(value)},`;
            }
        });
    }

    // Remove the trailing comma and newline for the last item
    result = result.slice(0, -1);

    result += `}`;

    return result;
}

// Stack to keep track of navigation history
const navigationStack = [];

let root = {};
let globalTreeData = {};
let currentNode = '';
let atBase = false;
let reload = false;
let languageCode = 'el';
let langStringOfCode = {
    'el': 'Greek',
    'it': 'Italian',
    'la': 'Latin'
}

function renderAddRow(table) {
    const row = table.insertRow();
    const cell = row.insertCell(0);
    cell.colSpan = "2";
    const button = document.createElement('button');
    button.id = 'add-row-btn';
    button.textContent = 'Add Row';
    button.addEventListener('click', () => {
        var modal = document.getElementById("add-item-modal");
        let itemForm = document.getElementById("add-item-form");
        let rowForm = document.getElementById("add-row-form");

        modal.style.display = "block";

        // Disable child-adding form
        itemForm.hidden = true;
        itemForm.classList.remove("inline-div");
        // Enable row-adding form
        rowForm.hidden = false;
        rowForm.classList.add("inline-div");
        // Set Language text
        document.getElementById('non-en-phrase').placeholder = `${langStringOfCode[languageCode]} Phrase`;
    });
    cell.appendChild(button);
}

function renderAddItem(children_arr, table) {
    let row;
    if (children_arr.length % 2 !== 0) {
        let rows = Array.from(table.rows);
        row = rows[rows.length - 1];
    } else {
        row = table.insertRow();
    }
    const cell = row.insertCell();
    const button = document.createElement('button');
    button.id = 'add-item-btn';
    button.textContent = 'Add Category';
    button.addEventListener('click', () => {
        var modal = document.getElementById("add-item-modal");
        let itemForm = document.getElementById("add-item-form");
        let rowForm = document.getElementById("add-row-form");

        modal.style.display = "block";

        // Enable child-adding form
        itemForm.hidden = false;
        itemForm.classList.add("inline-div");
        // Disable row-adding form
        rowForm.hidden = true;
        rowForm.classList.remove("inline-div");
    });
    cell.appendChild(button);
}

// Function to generate and display buttons based on the selected node
async function displayTree(treeData, node) {
    if (treeData == null) {
        treeData = await fetchTreeData();
        treeData = objectToMap(treeData);
        root = treeData;
    }

    if (reload) {
        reload = false;
        treeData = globalTreeData;
        node = currentNode;
    }

    globalTreeData = treeData;
    currentNode = node;

    document.getElementById("cat-name").textContent = node == "root" ? "" : node;
    const treeNavigator = document.getElementById('treeNavigator');
    treeNavigator.innerHTML = '';
    const phraseNavigator = document.getElementById('phraseNavigator');
    phraseNavigator.innerHTML = '';

    let children = treeData.get(node);
    atBase = (Array.isArray(children) && children.length > 0);
    if (atBase) {
        // Display a table for a list of phrases
        const table = document.createElement('table');
        table.classList.add('phrase-table');

        children.forEach(phraseItem => {
            let key = Object.keys(phraseItem)[0];
            const phraseObj = phraseItem[key];
            const translationObj = phraseObj[languageCode];

            const row = table.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);

            cell1.textContent = key; // English phrase
            cell2.textContent = translationObj || ''; // Translated phrase for the selected language
        });

        // Generate "Add Row" button
        renderAddRow(table);

        phraseNavigator.appendChild(table);

        const rows = document.querySelectorAll('td');
        rows.forEach(row => {
            row.style.width = `50%`;
        });
    } else if (children && Array.from(children.keys()).length > 0) {
        let children_arr = Array.from(children.keys());
        let { rows, columns, flipped } = calculateRowsAndColumns(children_arr.length);
        const table = document.createElement('table');

        for (let i = 0; i < rows; i++) {
            const row = table.insertRow();
            for (let j = 0; j < columns; j++) {
                const index = i * columns + j;
                const childNode = children_arr[index];

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

        // Generate "Add Item" button
        renderAddItem(children_arr, table);

        // Calculate dynamic button size based on the number of rows and columns
        if (flipped) {
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
    } else if (Array.from(children).length == 0) {
        // Show add item button
        let table = document.createElement('table');
        renderAddItem([], table);
        treeNavigator.appendChild(table);

        // Show add row button
        table = document.createElement('table');
        table.classList.add('phrase-table');
        renderAddRow(table);
        phraseNavigator.appendChild(table);
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

    // Get the <span> elements that close the modal
    var spans = Array.from(document.getElementsByClassName("close"));

    // Get each form
    let itemForm = document.getElementById("add-item-form");
    let rowForm = document.getElementById("add-row-form");

    // When the user clicks on <span> (x), close the modal
    spans.forEach(span => {
        span.onclick = function () {
            modal.style.display = "none";
        }
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    itemForm.addEventListener("submit", function (e) {
        e.preventDefault() // Cancel the default action
        addItem();

        modal.style.display = 'none';
    });

    rowForm.addEventListener("submit", function (e) {
        e.preventDefault();
        addRow();

        modal.style.display = 'none';
    });
}

function addItem() {
    const itemName = document.getElementById("item-name").value;
    document.getElementById("item-name").value = "";

    if (globalTreeData.get(itemName)) {
        alert(`An item with the name "${itemName}" already exists`);
    } else {
        // globalTreeData.set(currentNode[itemName], {});
        globalTreeData.get(currentNode).set(itemName, new Map());
        reload = true;
        displayTree(globalTreeData, currentNode);
    }
}

function addRow() {
    const enPhrase = document.getElementById("en-phrase").value;
    const nonEnPhrase = document.getElementById("non-en-phrase").value;
    document.getElementById("en-phrase").value = '';
    document.getElementById("non-en-phrase").value = '';

    if (!Array.isArray(globalTreeData.get(currentNode))) {
        globalTreeData.set(currentNode, []);
    }

    let child = globalTreeData.get(currentNode).find(el => {
        return Object.keys(el)[0] === enPhrase
    }) || {};
    if (Object.keys(child).length == 0) {
        child[enPhrase] = {};
    } else {
        globalTreeData.set(currentNode, globalTreeData.get(currentNode).filter(el => {
            return el !== child;
        }));
    }

    console.log(child);
    child[enPhrase][languageCode] = nonEnPhrase;
    globalTreeData.get(currentNode).push(child);

    reload = true;
    displayTree(globalTreeData, currentNode);
}

function download(fileName) {
    // let content = JSON.stringify(mapToObject(root));
    let content = mapToJSON(root);
    let contentType = "text/plain";
    var a = document.createElement("a");
    var file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

const upButton = document.getElementById("up-button");
upButton.addEventListener('click', () => {
    const treeAndNode = navigationStack.pop();
    displayTree(treeAndNode[0], treeAndNode[1]);
});

document.getElementById('lang-selector').addEventListener('change', function () {
    languageCode = this.value;
    displayTree(globalTreeData, currentNode);
});

// Initial display with root nodes
displayTree(null, 'root');

setupModal();

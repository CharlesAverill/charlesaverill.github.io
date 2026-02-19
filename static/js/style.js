// Default values
let darkModeEnabled = JSON.parse(localStorage.getItem("darkModeEnabled")) ?? false;

const typeface = document.getElementById('typeface');

// Toggle dark mode
function toggleDarkModeVisual() {
    document.body.classList.toggle('latex-dark');
    // document.getElementById('volpiccard').setAttribute('data-image',
    // 	'https://github.com/CharlesAverill/volpic/raw/main/media/logo_' + (darkModeEnabled ? 'white' : 'black') + '.png');
}
function toggleDarkMode() {
    toggleDarkModeVisual();
    darkModeEnabled = !darkModeEnabled;
    localStorage.setItem("darkModeEnabled", darkModeEnabled);
    console.log(localStorage);
}

// Toggle font
const fonts = [
    { name: "Latin Modern", className: "latin-modern" },
    { name: "Libertinus", className: "libertinus" },
    { name: "Courier Prime", className: "courier" },
    { name: "Cloister Black", className: "fraktur" },
    { name: "Comic Sans MS", className: "comicsans" },
    { name: "Papyrus", className: "papyrus" },
    { name: "Wingdings", className: "wingdings" }
    // { name: "Impact", className: "impact" }
  ];
let font = localStorage.getItem("font") ?? fonts[0].name;

document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("typeface");

    // Populate dropdown
    fonts.forEach(f => {
        const option = document.createElement("option");
        option.value = f.name;
        option.textContent = f.name;
        option.setAttribute("style", "font-family: '" + f.name + "', serif;"); // Apply font style
        if (f.name === font) option.selected = true;
        select.appendChild(option);
    });

    // Apply saved font
    applyFont(font);
});

function changeFont() {
    const selectedFont = document.getElementById("typeface").value;
    font = selectedFont;
    localStorage.setItem("font", font);
    applyFont(font);
}

function applyFont(fontName) {
    const body = document.body;
    fonts.forEach(f => body.classList.remove(f.className));

    const fontObj = fonts.find(f => f.name === fontName);
    if (fontObj) {
        body.classList.add(fontObj.className);
    }
}

// Rotate headshot carousel
const imagePath = "/static/images/";
const images = ["csg.png", "hackutd.png", "main.png", "main2.png", "mountain.png", "ti99.png"];
const carousel = document.getElementById("imageCarousel");
let clicks = 0;
function imageCarousel() {
    if (++clicks%3 != 0)
        return;

    let currentImage = carousel.src;
    while(carousel.src && carousel.src == currentImage)
        carousel.src = imagePath + images[Math.floor(Math.random() * images.length)];
}

if (darkModeEnabled) {
    toggleDarkModeVisual();
    document.getElementById("toggle")
}

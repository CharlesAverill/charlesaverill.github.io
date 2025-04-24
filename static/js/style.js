// Default values
let darkModeEnabled = JSON.parse(localStorage.getItem("darkModeEnabled")) ?? false;
let font = localStorage.getItem("font") ?? 'Latin Modern';

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
function toggleFontVisual() {
    document.body.classList.toggle('libertinus');
    typeface.value = "Toggle Font - " + (font == 'Libertinus' ? 'Latin Modern' : 'Libertinus');
}
function toggleFont() {
    toggleFontVisual();
    font = (font == 'Latin Modern') ? 'Libertinus' : 'Latin Modern';
    localStorage.setItem("font", font);
    console.log(localStorage);
}

// Rotate headshot carousel
const imagePath = "/static/images/";
const images = ["csg.png", "hackutd.png", "main.png", "main2.png", "mountain.png"];
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
if (font != 'Latin Modern') {
    toggleFontVisual();
}

let wheelTimeout = null;
let recentlyScrolled = false;

let scrollCount = 0;
let marqueeNumber = 0;

window.addEventListener("wheel", (event) => {
    const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight * 0.99;

    if (scrollCount >= 15) {
        const marquee = document.createElement('marquee');
        marquee.appendChild(getExtraContent(marqueeNumber));
        marqueeNumber++;
        document.body.appendChild(marquee);
        scrollCount = 0;
    }

    if (isAtBottom && event.deltaY > 0 && !recentlyScrolled) {
        scrollCount++;
        recentlyScrolled = true;
    }

    clearTimeout(wheelTimeout);
    wheelTimeout = setTimeout(() => {
        recentlyScrolled = false; // reset after 200ms of no scroll input
    }, 200);
});

const imgs = [
    "buffalocarp.jpg",
    "alligatorgar.jpg",
    "whaleshark.jpeg",
    "pumpkinseed.jpg",
    "tigermuskie.webp"
];

let scratchoffOn = false;

function activateScratchoff() {
    if (scratchoffOn)
        return;
    scratchoffOn = true;

    window.scrollTo({top: 0, left: 0, behavior: "instant"});
    document.body.style.overflow = "hidden";

    const fishSrc = "/static/images/fish/" +
        imgs[Math.floor(Math.random() * imgs.length)];

    // Create main canvas
    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.cursor = "crosshair";
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Load fish image
    const img = new Image();
    img.src = fishSrc;
    img.onload = () => {
        // 1) Prepare an offscreen buffer that's exactly canvas‑sized
        const buffer = document.createElement("canvas");
        buffer.width = canvas.width;
        buffer.height = canvas.height;
        const bctx = buffer.getContext("2d");

        // 2) Draw the fish into that buffer, stretched to cover
        bctx.drawImage(img, 0, 0, buffer.width, buffer.height);

        // Now we reveal from `buffer` instead of raw img

        let radius = 10;
        let isDrawing = false;

        function getMousePos(e) {
            return { x: e.clientX, y: e.clientY };
        }

        function revealCircle(x, y) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.closePath();
            ctx.clip();

            // Pull the same region from buffer → main canvas
            ctx.drawImage(
                buffer,
                x - radius, y - radius, 2 * radius, 2 * radius,   // src
                x - radius, y - radius, 2 * radius, 2 * radius    // dest
            );
            ctx.restore();

            radius = Math.min(radius * 1.005, 200);
        }

        canvas.addEventListener("mousedown", e => {
            isDrawing = true;
            const { x, y } = getMousePos(e);
            revealCircle(x, y);
        });

        canvas.addEventListener("mousemove", e => {
            if (!isDrawing) return;
            const { x, y } = getMousePos(e);
            revealCircle(x, y);
        });

        canvas.addEventListener("mouseup", () => {
            isDrawing = false;
        });
        canvas.addEventListener("mouseleave", () => {
            isDrawing = false;
        });
    };
}

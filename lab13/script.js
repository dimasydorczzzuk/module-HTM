window.onload = function() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        const gradient = ctx.createLinearGradient(0, 0, 200, 0);
        gradient.addColorStop(0, "#3498db");
        gradient.addColorStop(1, "#9b59b6");

        ctx.fillStyle = gradient;
        ctx.roundRect(10, 10, 180, 80, 10);
        ctx.fill();

        ctx.fillStyle = "white";
        ctx.font = "bold 16px Arial";
        ctx.textAlign = "center";
        ctx.fillText("HTML5 Canvas", 100, 55);
    }
};
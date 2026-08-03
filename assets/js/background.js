// background.js
// Injects a subtle "matrix rain" canvas behind the page content.
// Respects prefers-reduced-motion. No HTML changes needed beyond
// adding <script src="assets/js/background.js"></script>.

(function () {
  function initMatrixBackground() {
    // Respect users who've asked for reduced motion
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const canvas = document.createElement("canvas");
    canvas.id = "bg-canvas";
    document.body.prepend(canvas);
    const ctx = canvas.getContext("2d");

    const fontSize = 15;
    const chars =
      "01アイウエオカキクケコサシスセソタチツテトABCDEFGHIJKLMNOPQRSTUVWXYZ$#@%&";

    let width, height, columns, drops;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = new Array(columns).fill(0).map(() => Math.random() * -100);
    }
    resize();
    window.addEventListener("resize", resize);

    function draw() {
      // translucent fill over the previous frame = fading trail effect
      ctx.fillStyle = "rgba(15, 23, 42, 0.08)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const y = drops[i] * fontSize;

        // brighter leading character, dimmer trail — classic matrix look
        ctx.fillStyle = "rgba(125, 211, 252, 0.85)";
        ctx.fillText(text, i * fontSize, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      requestAnimationFrame(draw);
    }

    draw();
  }

  document.addEventListener("DOMContentLoaded", initMatrixBackground);
})();
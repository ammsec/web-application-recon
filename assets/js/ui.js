// ui.js
// Handles small interactive UI behaviors shared across phase pages.

document.addEventListener("DOMContentLoaded", () => {
  attachCopyButtons();
});

function attachCopyButtons() {
  const buttons = document.querySelectorAll(".copy-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const wrapper = btn.closest(".code-wrapper");
      if (!wrapper) return;

      const codeEl = wrapper.querySelector("code");
      if (!codeEl) return;

      const text = codeEl.innerText;

      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = "Copied!";
        btn.classList.add("copied");
      } catch (err) {
        btn.textContent = "Failed";
      }

      setTimeout(() => {
        btn.textContent = "Copy";
        btn.classList.remove("copied");
      }, 1500);
    });
  });
}
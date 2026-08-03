// search.js
// Live search for the phase cards on index.html.
// Depends on RECON_DATA from data.js — load data.js BEFORE this script.

document.addEventListener("DOMContentLoaded", initSearch);

function initSearch() {
  const input = document.getElementById("search-input");
  if (!input) return; // search box not on this page — nothing to do

  const cards = document.querySelectorAll(".phase-card");
  const noResults = document.getElementById("no-results");
  const resultCount = document.getElementById("result-count");

  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    let visibleCount = 0;

    cards.forEach((card) => {
      const link = card.querySelector("a");
      const href = link ? link.getAttribute("href") : "";
      const entry = typeof RECON_DATA !== "undefined"
        ? RECON_DATA.find((item) => href && href.endsWith(item.page))
        : null;

      const haystack = [
        link ? link.textContent : "",
        entry ? entry.description : "",
        entry ? entry.tags.join(" ") : ""
      ]
        .join(" ")
        .toLowerCase();

      const isMatch = query === "" || haystack.includes(query);
      card.style.display = isMatch ? "" : "none";
      if (isMatch) visibleCount++;
    });

    if (noResults) {
      noResults.style.display = visibleCount === 0 ? "block" : "none";
    }
    if (resultCount) {
      resultCount.textContent =
        query === "" ? "" : `${visibleCount} result${visibleCount === 1 ? "" : "s"}`;
    }
  });
}
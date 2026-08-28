/*
  AI Design LA — Tools page renderer
  Builds the category jump nav and tool listings from js/tools-data.js.
  Content edits belong in that data file, not here.
*/
(function () {
  "use strict";

  var data = window.TOOLS_DATA;
  var navEl = document.querySelector("[data-category-nav]");
  var sectionsEl = document.querySelector("[data-category-sections]");
  var graveyardEl = document.querySelector("[data-graveyard-rows]");

  if (!data || (!navEl && !sectionsEl && !graveyardEl)) {
    return;
  }

  var STATUS_META = {
    "core-stack": { label: "Core Stack", tagClass: "tag--solid-accent" },
    "in-rotation": { label: "In Rotation", tagClass: "tag--solid-brand" },
    watching: { label: "Watching", tagClass: "tag--solid-workflow" },
    dropped: { label: "Dropped", tagClass: "tag--solid-dropped" }
  };

  function statusMeta(status) {
    return STATUS_META[status] || STATUS_META["in-rotation"];
  }

  function escapeHtml(value) {
    var div = document.createElement("div");
    div.textContent = value;
    return div.innerHTML;
  }

  function toolsForCategory(slug) {
    return data.tools.filter(function (tool) {
      return tool.category === slug;
    });
  }

  function renderNav() {
    if (!navEl) return;

    navEl.innerHTML = data.categories
      .map(function (category) {
        return (
          '<a class="btn btn--small btn--outline" href="#' +
          category.slug +
          '">' +
          escapeHtml(category.label) +
          "</a>"
        );
      })
      .join("");
  }

  function toolRowHtml(tool) {
    var meta = statusMeta(tool.status);
    var contributorHtml = tool.contributor
      ? '<p class="tool-row__contributor">Contributed by ' + escapeHtml(tool.contributor) + "</p>"
      : "";

    return (
      '<div class="tool-row">' +
      '<div class="tool-row__col-name">' +
      '<h3 class="tool-row__name">' + escapeHtml(tool.name) + "</h3>" +
      '<div class="tool-row__meta">' +
      '<p class="tool-row__category">' + escapeHtml(data.categories.find(function (c) { return c.slug === tool.category; }).label) + "</p>" +
      '<span class="tag ' + meta.tagClass + '">' + meta.label + "</span>" +
      "</div>" +
      '<a class="tool-row__link" href="' + escapeHtml(tool.link) + '">Visit site ↗</a>' +
      contributorHtml +
      "</div>" +
      '<div class="tool-row__body">' +
      '<p class="tool-row__description">' + escapeHtml(tool.description) + "</p>" +
      '<div class="tool-row__field">' +
      '<p class="tool-row__field-label">Best for</p>' +
      '<p class="tool-row__field-text">' + escapeHtml(tool.bestFor) + "</p>" +
      "</div>" +
      '<div class="tool-row__field tool-row__field--take">' +
      '<p class="tool-row__field-label">Community take</p>' +
      '<p class="tool-row__field-text">' + escapeHtml(tool.communityTake) + "</p>" +
      "</div>" +
      "</div>" +
      "</div>"
    );
  }

  function categorySectionHtml(category) {
    var tools = toolsForCategory(category.slug);
    if (!tools.length) return "";

    var backgroundClass =
      category.background === "raised" ? "category-section--raised" : "category-section--white";

    return (
      '<section class="category-section ' +
      backgroundClass +
      '" id="' +
      category.slug +
      '">' +
      '<h2 class="type-heading-2 rule-heading category-section__title">' +
      escapeHtml(category.label) +
      "</h2>" +
      '<div class="tool-list">' +
      tools.map(toolRowHtml).join("") +
      "</div>" +
      "</section>"
    );
  }

  function renderSections() {
    if (!sectionsEl) return;

    sectionsEl.innerHTML = data.categories.map(categorySectionHtml).join("");
  }

  function graveyardRowHtml(entry) {
    return (
      '<div class="graveyard-row">' +
      '<div class="graveyard-row__col-name">' +
      '<h3 class="graveyard-row__name">' + escapeHtml(entry.name) + "</h3>" +
      '<p class="graveyard-row__label">Replaced by</p>' +
      '<p class="graveyard-row__replaced-by">' + escapeHtml(entry.replacedBy) + "</p>" +
      "</div>" +
      '<div class="graveyard-row__body">' +
      '<p class="graveyard-row__label">Former use</p>' +
      '<p class="graveyard-row__former-use">' + escapeHtml(entry.formerUse) + "</p>" +
      '<p class="graveyard-row__description">' + escapeHtml(entry.description) + "</p>" +
      "</div>" +
      "</div>"
    );
  }

  function renderGraveyard() {
    if (!graveyardEl || !data.graveyard || !data.graveyard.length) return;

    graveyardEl.innerHTML = data.graveyard.map(graveyardRowHtml).join("");
  }

  renderNav();
  renderSections();
  renderGraveyard();
})();

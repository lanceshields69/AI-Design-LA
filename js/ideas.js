/*
  AI Design LA — Ideas page renderer
  Builds the featured article and editorial grid from js/ideas-data.js.
  Content edits belong in that data file, not here.
*/
(function () {
  "use strict";

  var data = window.IDEAS_DATA;
  var featuredEl = document.querySelector("[data-featured-article]");
  var gridEl = document.querySelector("[data-editorial-grid]");

  if (!data || (!featuredEl && !gridEl)) {
    return;
  }

  var CATEGORY_META = {
    essay: { label: "Essay", badgeClass: "tag-badge--brand", tagClass: "tag--solid-brand", cta: "Read" },
    "case-study": { label: "Case Study", badgeClass: "tag-badge--case-study", tagClass: "tag--solid-case-study", cta: "Read" },
    workflow: { label: "Workflow", badgeClass: "tag-badge--workflow", tagClass: "tag--solid-workflow", cta: "Read" },
    research: { label: "Research", badgeClass: "tag-badge--research", tagClass: "tag--solid-research", cta: "Read" },
    video: { label: "Video", badgeClass: "tag-badge--video", tagClass: "tag--solid-video", cta: "Watch" }
  };

  // Repeats indefinitely as more articles are added, preserving the
  // magazine rhythm: wide+standard, three standards, standard+wide, repeat.
  var ROW_PATTERN = [
    ["wide", "standard"],
    ["standard", "standard", "standard"],
    ["standard", "wide"],
    ["standard", "standard", "standard"]
  ];

  function categoryMeta(category) {
    return CATEGORY_META[category] || CATEGORY_META.essay;
  }

  function escapeHtml(value) {
    var div = document.createElement("div");
    div.textContent = value;
    return div.innerHTML;
  }

  function renderFeatured() {
    if (!featuredEl || !data.featured) {
      return;
    }

    var article = data.featured;
    var meta = categoryMeta(article.category);

    featuredEl.innerHTML =
      '<div class="featured-article__media">' +
      '<img src="' + escapeHtml(article.image) + '" alt="" />' +
      "</div>" +
      '<div class="featured-article__body">' +
      '<div class="featured-article__tags">' +
      '<span class="tag tag--solid-accent">Featured</span>' +
      '<span class="tag ' + meta.tagClass + '">' + meta.label + "</span>" +
      "</div>" +
      '<h2 class="featured-article__title">' + escapeHtml(article.title) + "</h2>" +
      '<p class="featured-article__excerpt">' + escapeHtml(article.excerpt) + "</p>" +
      '<div class="featured-article__footer">' +
      '<div class="featured-article__byline">' +
      '<p class="featured-article__author">' + escapeHtml(article.author) + "</p>" +
      '<p class="featured-article__date">' + escapeHtml(article.date) + "</p>" +
      "</div>" +
      '<a class="featured-article__read" href="' + escapeHtml(article.link) + '">' + meta.cta + " ↗</a>" +
      "</div>" +
      "</div>";
  }

  function articleCardHtml(article, shape) {
    var meta = categoryMeta(article.category);
    var wideClass = shape === "wide" ? " article-card--wide" : "";

    return (
      '<article class="article-card' + wideClass + '" data-category="' + article.category + '">' +
      '<div class="article-card__media">' +
      '<img src="' + escapeHtml(article.image) + '" alt="" />' +
      '<span class="tag-badge ' + meta.badgeClass + '">' + meta.label + "</span>" +
      "</div>" +
      '<div class="article-card__body">' +
      '<h3 class="article-card__title">' + escapeHtml(article.title) + "</h3>" +
      '<p class="article-card__excerpt">' + escapeHtml(article.excerpt) + "</p>" +
      '<div class="article-card__footer">' +
      '<p class="article-card__meta">' + escapeHtml(article.date) + " • " + escapeHtml(article.author) + "</p>" +
      '<a class="article-card__read" href="' + escapeHtml(article.link) + '">' + meta.cta + " ↗</a>" +
      "</div>" +
      "</div>" +
      "</article>"
    );
  }

  function renderGrid() {
    if (!gridEl || !data.articles || !data.articles.length) {
      return;
    }

    var rowsHtml = "";
    var index = 0;
    var patternIndex = 0;

    while (index < data.articles.length) {
      var shapes = ROW_PATTERN[patternIndex % ROW_PATTERN.length];
      var rowShapes = shapes.slice(0, data.articles.length - index);
      var rowClass = rowShapes.length === 3 ? "editorial-row--triple" : "editorial-row--split";

      var cardsHtml = rowShapes
        .map(function (shape) {
          var article = data.articles[index];
          index += 1;
          return articleCardHtml(article, shape);
        })
        .join("");

      rowsHtml += '<div class="editorial-row ' + rowClass + '">' + cardsHtml + "</div>";
      patternIndex += 1;
    }

    gridEl.innerHTML = rowsHtml;
  }

  renderFeatured();
  renderGrid();
})();

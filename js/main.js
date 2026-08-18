(function () {
  "use strict";

  var header = document.querySelector("[data-site-header]");
  var navToggle = document.querySelector("[data-nav-toggle]");
  var mobileMenu = document.querySelector("[data-mobile-menu]");
  var mobileClose = document.querySelector("[data-mobile-close]");

  // ---------- Sticky header: hide on scroll down, reveal on scroll up ----------
  if (header) {
    var lastScrollY = window.scrollY;
    var revealAfter = window.innerHeight * 0.6;
    var ticking = false;

    var updateHeader = function () {
      var currentScrollY = window.scrollY;

      if (currentScrollY < revealAfter) {
        header.classList.remove("is-visible");
      } else if (currentScrollY < lastScrollY) {
        header.classList.add("is-visible");
      } else if (currentScrollY > lastScrollY) {
        header.classList.remove("is-visible");
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          window.requestAnimationFrame(updateHeader);
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  // ---------- Mobile menu (full-screen overlay) ----------
  if (navToggle && mobileMenu) {
    var closeMenu = function () {
      mobileMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };

    var openMenu = function () {
      mobileMenu.classList.add("is-open");
      navToggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    };

    navToggle.addEventListener("click", function () {
      if (mobileMenu.classList.contains("is-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    if (mobileClose) {
      mobileClose.addEventListener("click", closeMenu);
    }

    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    });
  }
})();

// ---------- Hero entrance: headline type effect + mosaic image reveal ----------
// Sequence: canvas color -> headline types in -> hero image assembles as a
// randomized 100x100 mosaic -> complete image. Runs once per browser session.
(function () {
  "use strict";

  var hero = document.querySelector(".hero");
  var heroImage = document.querySelector(".hero__image");
  var titleEl = document.querySelector("[data-hero-title]");

  if (!hero || !heroImage || !titleEl) {
    return;
  }

  var SESSION_KEY = "adlHeroIntroPlayed";
  var alreadyPlayed = false;

  try {
    alreadyPlayed = window.sessionStorage.getItem(SESSION_KEY) === "1";
  } catch (e) {
    alreadyPlayed = false;
  }

  // Already seen this session (or storage unavailable but flag couldn't be
  // read): leave the hero exactly as it renders by default, no animation.
  if (alreadyPlayed) {
    return;
  }

  try {
    window.sessionStorage.setItem(SESSION_KEY, "1");
  } catch (e) {
    // Storage unavailable (e.g. private mode) — animation still plays once
    // for this page load, it just won't be remembered across navigations.
  }

  var reduceMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var CHAR_STAGGER_MS = 18;
  var CHAR_DURATION_MS = 300;
  var TILE_SIZE = 100;
  var TILE_MAX_STAGGER_MS = 15;
  var TILE_STAGGER_BUDGET_MS = 700;
  var TILE_DURATION_MS = 300;
  var REDUCED_MOTION_DELAY_MS = 250;

  // Hide the photo immediately so the hero starts as a flat --bg-canvas
  // surface for the headline to type over.
  heroImage.style.opacity = "0";

  if (reduceMotion) {
    window.setTimeout(function () {
      heroImage.classList.add("hero__image--fade-in");
      window.requestAnimationFrame(function () {
        heroImage.style.opacity = "1";
      });
    }, REDUCED_MOTION_DELAY_MS);
  } else {
    typeHeadline(titleEl, buildMosaic);
  }

  function typeHeadline(el, onDone) {
    var text = el.textContent;
    var accessibleLabel = text.replace(/ /g, " ");
    el.setAttribute("aria-label", accessibleLabel);
    el.textContent = "";

    var visual = document.createElement("span");
    visual.className = "hero__title-visual";
    visual.setAttribute("aria-hidden", "true");

    var visibleIndex = 0;
    for (var i = 0; i < text.length; i++) {
      var ch = text.charAt(i);
      if (ch === " " || ch === " ") {
        visual.appendChild(document.createTextNode(ch));
        continue;
      }
      var charSpan = document.createElement("span");
      charSpan.className = "hero__title-char";
      charSpan.textContent = ch;
      charSpan.style.animationDelay = visibleIndex * CHAR_STAGGER_MS + "ms";
      visual.appendChild(charSpan);
      visibleIndex++;
    }

    var caret = document.createElement("span");
    caret.className = "hero__caret";
    caret.setAttribute("aria-hidden", "true");
    visual.appendChild(caret);

    el.appendChild(visual);

    var totalTypeMs = Math.max(visibleIndex - 1, 0) * CHAR_STAGGER_MS + CHAR_DURATION_MS;
    window.setTimeout(function () {
      caret.classList.add("is-done");
      onDone();
    }, totalTypeMs + 150);
  }

  function buildMosaic() {
    var rect = heroImage.getBoundingClientRect();
    var width = Math.round(rect.width);
    var height = Math.round(rect.height);

    // No usable dimensions (e.g. hidden tab) — just reveal the image.
    if (!width || !height) {
      heroImage.style.opacity = "1";
      return;
    }

    var cols = Math.ceil(width / TILE_SIZE);
    var rows = Math.ceil(height / TILE_SIZE);

    var mosaic = document.createElement("div");
    mosaic.className = "hero__mosaic";

    var tiles = [];
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        var tileWidth = Math.min(TILE_SIZE, width - c * TILE_SIZE);
        var tileHeight = Math.min(TILE_SIZE, height - r * TILE_SIZE);
        var tile = document.createElement("span");
        tile.className = "hero__mosaic-tile";
        tile.style.left = c * TILE_SIZE + "px";
        tile.style.top = r * TILE_SIZE + "px";
        tile.style.width = tileWidth + "px";
        tile.style.height = tileHeight + "px";
        mosaic.appendChild(tile);
        tiles.push(tile);
      }
    }

    hero.insertBefore(mosaic, heroImage.nextSibling);

    // The mosaic now fully occludes the image, so it's safe to reveal it
    // underneath with no transition and no flash.
    heroImage.style.opacity = "1";

    // Fisher-Yates shuffle so blocks reveal in randomized order.
    for (var i = tiles.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = tiles[i];
      tiles[i] = tiles[j];
      tiles[j] = tmp;
    }

    // Cap the total build time regardless of tile count (viewport size)
    // so the reveal stays fast on large screens with many tiles.
    var stagger =
      tiles.length > 0
        ? Math.min(TILE_MAX_STAGGER_MS, TILE_STAGGER_BUDGET_MS / tiles.length)
        : 0;

    tiles.forEach(function (tile, index) {
      tile.style.transitionDelay = Math.round(index * stagger) + "ms";
    });

    // Double rAF: let the tiles paint in their opaque starting state on
    // their own frame before the class flip starts the transition.
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        tiles.forEach(function (tile) {
          tile.classList.add("is-revealed");
        });
      });
    });

    var totalRevealMs = Math.max(tiles.length - 1, 0) * stagger + TILE_DURATION_MS;
    window.setTimeout(function () {
      if (mosaic.parentNode) {
        mosaic.parentNode.removeChild(mosaic);
      }
    }, totalRevealMs + 80);
  }
})();

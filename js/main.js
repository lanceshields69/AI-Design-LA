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

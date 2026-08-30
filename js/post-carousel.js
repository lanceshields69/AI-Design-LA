/*
  AI Design LA — Post image carousel
  Any [data-carousel] block gets prev/next buttons, dot navigation, and a
  "1 of N" counter wired up automatically from its [data-carousel-slide]
  children. Multiple carousels per page work independently.
*/
(function () {
  "use strict";

  var carousels = document.querySelectorAll("[data-carousel]");

  carousels.forEach(function (carousel) {
    var track = carousel.querySelector("[data-carousel-track]");
    var slides = carousel.querySelectorAll("[data-carousel-slide]");
    var countEl = carousel.querySelector("[data-carousel-count]");
    var dotsEl = carousel.querySelector("[data-carousel-dots]");
    var prevBtn = carousel.querySelector("[data-carousel-prev]");
    var nextBtn = carousel.querySelector("[data-carousel-next]");
    var captionEls = carousel.querySelectorAll("[data-carousel-caption]");

    if (!track || slides.length < 2) return;

    var index = 0;

    var dots = Array.from(slides).map(function (_, i) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.className = "post-carousel__dot";
      dot.setAttribute("aria-label", "Go to slide " + (i + 1));
      dot.addEventListener("click", function () {
        goTo(i);
      });
      dotsEl.appendChild(dot);
      return dot;
    });

    function render() {
      track.style.transform = "translateX(-" + index * 100 + "%)";
      if (countEl) countEl.textContent = index + 1 + " of " + slides.length;

      dots.forEach(function (dot, i) {
        dot.classList.toggle("is-active", i === index);
      });

      captionEls.forEach(function (el, i) {
        el.hidden = i !== index;
      });
    }

    function goTo(next) {
      index = (next + slides.length) % slides.length;
      render();
    }

    if (prevBtn) prevBtn.addEventListener("click", function () { goTo(index - 1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { goTo(index + 1); });

    render();
  });
})();

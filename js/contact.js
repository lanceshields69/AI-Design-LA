/*
  AI Design LA — Contact page
  Pre-selects the "reason" radio from a URL hash (e.g. contact.html#sponsorship,
  linked from footer/CTA buttons elsewhere on the site) and wires the
  "Clear form" reset button.
*/
(function () {
  "use strict";

  var hash = window.location.hash.replace("#", "");
  if (hash) {
    var radio = document.querySelector('input[name="reason"][value="' + hash + '"]');
    if (radio) radio.checked = true;
  }

  var form = document.querySelector("[data-formspree-form]");
  var clearBtn = document.querySelector("[data-clear-form]");
  if (form && clearBtn) {
    clearBtn.addEventListener("click", function (event) {
      event.preventDefault();
      form.reset();
    });
  }
})();

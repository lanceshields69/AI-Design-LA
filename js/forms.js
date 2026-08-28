/*
  AI Design LA — Formspree submit handler
  Any <form data-formspree-form> inside a [data-form-shell] is submitted via
  fetch so the page never navigates away. Success/error status renders into
  the shell's [data-form-status] element.
*/
(function () {
  "use strict";

  var shells = document.querySelectorAll("[data-form-shell]");

  shells.forEach(function (shell) {
    var form = shell.querySelector("[data-formspree-form]");
    var statusEl = shell.querySelector("[data-form-status]");
    if (!form) return;

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var submitBtn = form.querySelector('[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;
      if (statusEl) {
        statusEl.hidden = true;
        statusEl.classList.remove("form__status--success", "form__status--error");
      }

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (response) {
          if (!response.ok) throw new Error("Submission failed");

          form.reset();
          form.hidden = true;
          if (statusEl) {
            statusEl.textContent = "Thanks — we got it. We'll be in touch if we need anything else.";
            statusEl.classList.add("form__status", "form__status--success");
            statusEl.hidden = false;
          }
        })
        .catch(function () {
          if (submitBtn) submitBtn.disabled = false;
          if (statusEl) {
            statusEl.textContent = "Something went wrong sending that. Please try again in a moment.";
            statusEl.classList.add("form__status", "form__status--error");
            statusEl.hidden = false;
          }
        });
    });
  });
})();

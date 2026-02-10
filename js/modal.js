(() => {
  const refs = {
    form: document.querySelector(".form-subscribe"),
    modal: document.querySelector("[data-modal]"),
    closeX: document.querySelector("[data-modal-close-x]"),
    closeBtn: document.querySelector("[data-modal-close-btn]"),
  };
  
  refs.form.addEventListener("submit", (e) => {
    if (!refs.form.checkValidity()) return;
    e.preventDefault();
    refs.modal.classList.add("subscription-open");
  });
    refs.closeX.addEventListener("click", () => {
    refs.modal.classList.remove("subscription-open");
  });

    refs.closeBtn.addEventListener("click", () => {
    refs.modal.classList.remove("subscription-open");
  });
})();

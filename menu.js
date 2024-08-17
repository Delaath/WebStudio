(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-open-menu]"),
      closeModalBtn: document.querySelector("[data-close-menu]"),
      modal: document.querySelector("[data-menu]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();
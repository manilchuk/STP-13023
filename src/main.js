(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  // Закриття по кліку на бекдроп
  refs.modal.addEventListener('click', e => {
    if (e.target === refs.modal) {
      toggleModal();
    }
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
  }

  document.querySelectorAll('.menu-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (refs.modal.classList.contains('is-open')) {
        toggleModal();
      }
    });
  });

  // burger animation
  const hotspot = document.querySelector('.hero-hotspot');
  const burger = document.querySelector('.hero-burger');

  hotspot.addEventListener('mouseenter', () => {
    burger.classList.add('show');
  });

  hotspot.addEventListener('mouseleave', () => {
    burger.classList.remove('show');
  });
})();

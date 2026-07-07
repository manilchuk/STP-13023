(() => {
  const refs = {
    openBtn: document.querySelector('[data-menu-open]'),
    closeBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    burger: document.querySelector('[data-burger]'),
    menuLinks: document.querySelectorAll('[data-menu] .menu-nav-link'),
  };

  refs.openBtn.addEventListener('click', toggleMenu);
  refs.closeBtn.addEventListener('click', toggleMenu);

  // Закриття по кліку на бекдроп
  refs.menu.addEventListener('click', e => {
    if (e.target === refs.menu) {
      toggleMenu();
    }
  });

  // Закриття по кліку на пункт меню
  refs.menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (refs.menu.classList.contains('is-open')) {
        toggleMenu();
      }
    });
  });

  function toggleMenu() {
    const isOpen = refs.menu.classList.toggle('is-open');

    document.body.classList.toggle('no-scroll', isOpen);

    refs.burger.classList.toggle('is-hidden', isOpen);
  }

  // burger animation
  const hotspot = document.querySelector('[data-hero-hotspot]');
  const burgerAnimation = document.querySelector('[data-hero-burger]');

  if (hotspot && burgerAnimation) {
    hotspot.addEventListener('mouseenter', () => {
      burgerAnimation.classList.add('show');
    });

    hotspot.addEventListener('mouseleave', () => {
      burgerAnimation.classList.remove('show');
    });
  }
})();

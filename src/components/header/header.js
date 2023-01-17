{ // menu
  const barBtn = document.querySelector('.header__bars');
  const menu = document.querySelector('.menu');
  const closeMenuBtn = document.querySelector('.menu__close');

  barBtn.addEventListener('click', () => {
    menu.dataset.isActive = `${true}`;
    document.querySelector('body').style.overflow = 'hidden';
  })

  menu.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      closeMenu();
    }
  })

  closeMenuBtn.addEventListener('click', closeMenu)

  function closeMenu() {
    menu.dataset.isActive = `${false}`;

    document.querySelector('body').style.overflow = 'auto';
  }
}

{ // search
  const searchToggleBtn = document.querySelector('.header__search-btn--toggle');
  const searchPanel = document.querySelector('.header__search');

  searchToggleBtn.addEventListener('click', function() {
    const searchStatus = searchPanel.dataset.isActive === 'false';

    this.dataset.isOpen = `${searchStatus}`;

    searchPanel.dataset.isActive = `${searchStatus}`;
  })
}

{ // hide notif plate
  const phoneLine = document.querySelector('.header__phone-line');

  document.addEventListener('scroll', function() {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 100) {
      phoneLine.dataset.isShow = 'false';
    } else {
      phoneLine.dataset.isShow = 'true';
    }
  })
}

{ // user form
  const userBtn = document.querySelector('.header__user');
  const userBlock = document.querySelector('.header__user-wrap');

  userBtn.addEventListener('click', () => {
    userBlock.dataset.isActive = `${userBlock.dataset.isActive === 'false'}`;
  })

  document.addEventListener('click', (e) => {
    const block = e.target.closest('.header__user-wrap');

    if (!block) {
      userBlock.dataset.isActive = `${false}`;
    }
  })
}
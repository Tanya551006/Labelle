const closeWarningBlockBtns = document.querySelectorAll('.warn__close-btn');

Array.from(closeWarningBlockBtns).forEach(btn => {
  btn.addEventListener('click', function() {
    const currentWarnBlock = this.closest('.warn');

    currentWarnBlock && currentWarnBlock.remove();
  })
})
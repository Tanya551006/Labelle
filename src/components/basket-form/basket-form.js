window.addEventListener('DOMContentLoaded', () => {
  const changeCountBtns = document.querySelectorAll('.basket-form__change-count-btn');

  Array.from(changeCountBtns).forEach(btn => {
    btn.addEventListener('click', function() {
      this.dataset.isActive = `${this.dataset.isActive === 'false'}`;
    })
  });

  document.addEventListener('click', (e) => {
    const changeCountBtn = e.target.closest('.basket-form__change-count-btn');
    const changeCountTooltip = e.target.closest('.basket-form__count-tooltip');

    if (!changeCountBtn && !changeCountTooltip) {
      Array.from(changeCountBtns).forEach(btn => btn.dataset.isActive = `${false}`);
    }
  })

  const deleteBtns = document.querySelectorAll('.basket-form__delete-good-btn');

  Array.from(deleteBtns).forEach(btn => {
    btn.addEventListener('click', function() {
      const goodRow = this.closest('.basket-form__row');

      goodRow && goodRow.remove();
    })
  })
})




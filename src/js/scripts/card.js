const arrowBtns = document.querySelectorAll('.card__count-btn');

Array.from(arrowBtns).forEach(btn => {
  btn.addEventListener('click', function() {
    const targetInput = this.closest('.card__count-field').querySelector('.card__count-input');

    const type = this.dataset.type;

    switch ( type ) {
      case 'plus':
        targetInput.value = +targetInput.value + 1
        break;

      case 'minus':
        targetInput.value = +targetInput.value - 1
        break;
    }

    if (targetInput.value < 0) {
      targetInput.value = 0;
    }
  })
})
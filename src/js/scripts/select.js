// toggle selects
const selects = document.querySelectorAll('.form-field__select-container');

Array.from(selects).forEach(select => {
  const selectHead = select.querySelector('.form-field__select-head');

  selectHead.addEventListener('click', function() {
    select.dataset.isActive = `${select.dataset.isActive === 'false'}`;
  })
})

// close all select
document.addEventListener('click', (e) => {
  const select = e.target.closest('.form-field__select-container');

  if (!select) {
    Array.from(selects).forEach(item => {
      item.dataset.isActive = `${false}`;
    })
  }
})

// select item
const selectItems = document.querySelectorAll('.form-field__select-item');

Array.from(selectItems).forEach(item => {
  item.addEventListener('click', function() {
    { // unmarked siblings items
      const siblingsElements = this.closest('.form-field__select-body').querySelectorAll('.form-field__select-item');

      Array.from(siblingsElements).forEach(item => item.classList.remove('checked'));
    }

    this.classList.add('checked');

    { // input item content to head
      const content = this.querySelector('.form-field__select-item-content').innerHTML;
      const headBlock = this.closest('.form-field__select-container').querySelector('.form-field__select-head .form-field__select-item-content');

      headBlock.innerHTML = content;
    }

    {// close select body
      const selectBody = this.closest('.form-field__select-container');

      selectBody.dataset.isActive = `${false}`;
    }
  })
})
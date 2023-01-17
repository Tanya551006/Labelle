document.addEventListener('DOMContentLoaded', () => {
  const selects = document.querySelectorAll('.pagination__select-container');

  Array.from(selects).forEach(select => {
    select.addEventListener('click', function(e) {
      const head = e.target.closest('.pagination__select-head');

      if (head) {
        this.dataset.isActive = `${this.dataset.isActive === 'false'}`;
      }
    })
  })

  // close all select
  document.addEventListener('click', (e) => {
    const select = e.target.closest('.pagination__select-container');

    if (!select) {
      Array.from(selects).forEach(item => {
        item.dataset.isActive = `${false}`;
      })
    }
  })
})
window.addEventListener('DOMContentLoaded', () => {
  const toolsSublistBtns = document.querySelectorAll('.tools__btn--sublist');
  const toolsBtnContainers = document.querySelectorAll('.tools__btn-container');

  Array.from(toolsSublistBtns).forEach(btn => {
    btn.addEventListener('click', function() {
      const btnContainer = this.closest('.tools__btn-container');

      Array.from(toolsBtnContainers).forEach(container => {
        if (container !== btnContainer) {
          container.dataset.isActive = `${false}`;
        }
      })

      btnContainer.dataset.isActive = `${btnContainer.dataset.isActive === 'false'}`;
    })
  });

  document.addEventListener('click', (e) => {
    const toolBtn = e.target.closest('.tools__btn--sublist');

    if (!toolBtn) {
      Array.from(toolsBtnContainers).forEach(container => {
        container.dataset.isActive = `${false}`;
      })
    }
  })
})
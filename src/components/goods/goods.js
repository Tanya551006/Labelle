{ // filter
    const filterBtn = document.querySelector('.tools__btn--open-filters');
    const filterBlock = document.querySelector('.filter');
    const closeFiltersBtn = document.querySelector('.filter__close');

    filterBtn.addEventListener('click', () => {
        filterBlock.dataset.isActive = `${true}`;
        document.querySelector('body').style.overflow = 'hidden';
    })

    filterBlock.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
            closeFilters();
        }
    })

    closeFiltersBtn.addEventListener('click', closeFilters)

    function closeFilters() {
        filterBlock.dataset.isActive = `${false}`;

        document.querySelector('body').style.overflow = 'auto';
    }

    const expandLink = document.querySelectorAll('.filter__btn-arrow');

    Array.from(expandLink).forEach(btn => {
        btn.addEventListener('click', (e) => {
            const expandLink = e.target.closest('.filter__btn--expand');

            expandLink.dataset.isOpen = `${expandLink.dataset.isOpen === 'false'}`;
        })
    })
}
{
    const tabsBtn = document.querySelectorAll('.order__tab-head');
    const tabsBody = document.querySelectorAll('.order__tab-body');

    Array.from(tabsBtn).forEach(btn => {
        btn.addEventListener('click', function() {
            const currentIndex = this.dataset.tab;

            Array.from(tabsBtn).forEach(btn => btn.dataset.isActive = `${false}`);
            Array.from(tabsBody).forEach(body => {
                (body.dataset.tab === currentIndex) ? (body.dataset.isActive = `${true}`) : (body.dataset.isActive = `${false}`)
            })

            this.dataset.isActive = `${true}`;
        })
    })
}
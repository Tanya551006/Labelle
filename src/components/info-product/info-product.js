const tabs = document.querySelectorAll('.info-product__tab');
const tabsBodies = document.querySelectorAll('.info-product__tab-body');

Array.from(tabs).forEach(tab => {
  tab.addEventListener('click', function() {
    const indexTab = this.dataset.tab;

    Array.from(tabs).forEach(tab => {
      tab.dataset.isActive = `${false}`;

      if (tab.dataset.tab === indexTab) {
        tab.dataset.isActive = `${true}`;
      }
    });
    Array.from(tabsBodies).forEach(tabBody => {
      tabBody.dataset.isActive = `${false}`;

      if (tabBody.dataset.tab === indexTab) {
        tabBody.dataset.isActive = `${true}`;
      }
    });
  })
})
function tabNavigationInit() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((menuItem, index) => {
      menuItem.addEventListener('click', () => activeTab(index));
    });
  }
}
tabNavigationInit();

const accordionList = document.querySelectorAll('.js-accordion dt');

function activeAccordion() {
  this.classList.add('ativo');
  this.nextElementSibling.classList.add('ativo');
}

accordionList.forEach((item) =>
  item.addEventListener('click', activeAccordion)
);

const ACTIVE_CLASS = 'ativo';

function initTabNavigation() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(ACTIVE_CLASS);

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
initTabNavigation();

function initAccordionList() {
  const accordionList = document.querySelectorAll('.js-accordion dt');

  function activeAccordion() {
    this.classList.toggle(ACTIVE_CLASS);
    this.nextElementSibling.classList.toggle(ACTIVE_CLASS);
  }

  accordionList.forEach((item) =>
    item.addEventListener('click', activeAccordion)
  );
}
initAccordionList();

function initSmoothScrolling() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initSmoothScrolling();

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

function initScrollAnimation() {
  const sections = document.querySelectorAll('.js-scroll');

  const sectionsExist = sections.length;
  if (sectionsExist) {
    const halfWindow = window.innerHeight * 0.6;
    function animateScroll() {
      sections.forEach((section) => {
        // getBoundingClientRect -> Método que retorna um objeto com valores de
        //width, height, distâncias do elemento e mais.
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - halfWindow < 0;
        console.log(isSectionVisible);
        if (isSectionVisible) {
          section.classList.add(ACTIVE_CLASS);
        }
      });
    }
    animateScroll();

    window.addEventListener('scroll', animateScroll);
  }
}
initScrollAnimation();

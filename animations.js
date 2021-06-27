const ACTIVE_CLASS = 'ativo';

function initTabNavigation() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(ACTIVE_CLASS);

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(ACTIVE_CLASS);
      });
      const animationDirection = tabContent[index].dataset.anime;
      tabContent[index].classList.add(ACTIVE_CLASS, animationDirection);
    }

    tabMenu.forEach((menuItem, index) => {
      menuItem.addEventListener('click', () => activeTab(index));
    });
  }
}
initTabNavigation();

function initAccordionList() {
  const accordionList = document.querySelectorAll(
    '[data-animate="accordion"] dt'
  );

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
  const linksInternos = document.querySelectorAll(
    '[data-menu="smooth"] a[href^="#"]'
  );

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
  const sections = document.querySelectorAll('[data-animate="scroll"]');

  const sectionsExist = sections.length;
  if (sectionsExist) {
    const halfWindow = window.innerHeight * 0.6;
    function animateScroll() {
      sections.forEach((section) => {
        // getBoundingClientRect -> Método que retorna um objeto com valores de
        //width, height, distâncias do elemento e mais.
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - halfWindow < 0;
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

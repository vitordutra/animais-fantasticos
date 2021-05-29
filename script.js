// Selecionando elementos
// Quero fazer um loop por cada li
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if (tabMenu.length && tabContent.length) {
  // Adicionar ativo à primeira seção
  tabContent[0].classList.add('ativo');

  // Criar uma função de acordo com o número que passar
  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
  }

  // Quando Clicar, passar o número do item clicado para dentro da activeTab
  // Ex: Se clicar no esquilo, vai passar "index = 1"

  // Observação: No addEventListener, não é possível executar a função diretamente,
  // e sim passar somente a referência dessa função.
  // ex: exemplo.addEventListener('click', referencia) //Sem parenteses
  // ex: exemplo.addEventListener('click', executar()) //Com parenteses - Inválido!
  // Portanto passamos uma arrow function para executar o activetab
  tabMenu.forEach((menuItem, index) => {
    menuItem.addEventListener('click', () => activeTab(index));
  });
}

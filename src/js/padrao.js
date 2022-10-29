document.addEventListener('DOMContentLoaded', () => {

  // Seleciona todos elementos da classe "navbar-burger"
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Adiciona um "clique" em cada um deles
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Pega o alvo através do atributo "data-target"
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Adiciona a classe "is-active" em todos os "navbar-burger" e "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});
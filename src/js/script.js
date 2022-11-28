const comentarioForm = document.querySelector("#comentario-form");
const comentContainer = document.querySelector("#comentarios-feitos");
const welcomeContainer = document.querySelector("#welcome");
const userLog = document.querySelector("#user-log");
const logoutBtn = document.querySelector("#logout");
localStorage.setItem("name", "Matheus");

// ---------- EXIBE INFORMACOES DE LOGIN DOS USUARIOS ----------

function checkUser() {
  const userName = localStorage.getItem("name");

  if (userName) {
    userLog.style.display = "none";
    welcomeContainer.style.display = "block";

    const userNameElement = document.querySelector("#userName");

    userNameElement.textContent = userName;
  } else {
    userLog.style.display = "none";
    welcomeContainer.style.display = "none";
  }
}

// ---------- MOSTRA OS COMENTARIOS FEITOS PELOS USUARIOS ----------
function showComent() {
  const comentariosFeitos = localStorage.getItem("comentario");

  if (comentariosFeitos) {
    comentContainer.style.display = "block";

    const comentariosFeitosElement = document.querySelector(
      "#comentarios-feitos"
    );

    comentariosFeitosElement.textContent = comentariosFeitos;
  } else {
    comentContainer.style.display = "none";
  }
}

// ----- EVENTO PARA CAPTURAR COMENTARIO FEITO POR USUARIO -----
comentarioForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const comentarioInput = document.querySelector("#comentario");

  localStorage.setItem("comentario", comentarioInput.value);

  comentarioInput.value = "";

  showComent();
});

// ----------- Application Start ----------
showComent();

// ---------- SALVA RECEITA DO USUARIO ------------

// ----- REGISTRA AVALIACAO DA RECEITA FEITA PELO USUARIO -----
var stars = document.querySelectorAll(".star-icon");

document.addEventListener("click", function (e) {
  var classStar = e.target.classList;
  if (!classStar.contains("ativo")) {
    stars.forEach(function (star) {
      star.classList.remove("ativo");
    });
    classStar.add("ativo");
    console.log(e.target.getAttribute("data-avaliacao"));
  }
});

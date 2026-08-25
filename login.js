const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

const usuarioCorrecto = "docente";
const contraseñaCorrecta = "1234";

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (username === usuarioCorrecto && password === contraseñaCorrecta) {
        sessionStorage.setItem("usuarioAutenticado", "true");
        window.location.href = "reservas.html";
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos.";
    }
});
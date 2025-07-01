function login() {
     event.preventDefault();
  const username = document.getElementById("username").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  // Verificar usuario y contraseña
  if (password === "1234") {
    switch (username) {
      case "admin":
        window.location.href = "../../pages/panelAdmin.html";
        break;
      case "empleado":
        window.location.href = "../../pages/PanelPrincipalEmpl.html";
        break;
      case "socio":
        window.location.href = "../../pages/indexVistaUsuario.html";
        break;
      default:
        error.innerText = "Usuario no reconocido.";
        error.style.display = "block";
    }
  } else {
    error.innerText = "Contraseña incorrecta.";
    error.style.display = "block";
  }
}

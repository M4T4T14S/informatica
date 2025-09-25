function verificarEdad() {
    let entrada = prompt("Por favor, ingresa tu edad:");
    let edad = Number(entrada);

    const mensajeElemento = document.getElementById("mensaje");
if (isNaN(edad) || edad === 0) {
     mensajeElemento.textContent = "Por favor, ingresa tu edad.";
     mensajeElemento.style.color = "orange";
} else if (edad >= 18) {
     mensajeElemento.textContent = "Acceso permitido.";
  mensajeElemento.style.color = "green";
 } else {
     mensajeElemento.textContent = "Acceso denegado.";
      mensajeElemento.style.color = "red";
    }
}
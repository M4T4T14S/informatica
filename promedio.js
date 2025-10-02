function calcularPromedio() {
    let nota1 = prompt("Ingresa la primera nota:");
    let nota2 = prompt("Ingresa la segunda nota:");
    let nota3 = prompt("Ingresa la tercera nota:");
    nota1 = Number(nota1);
    nota2 = Number(nota2);
    nota3 = Number(nota3);
    if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
      let promedio = (nota1 + nota2 + nota3) / 3;
      promedio = promedio.toFixed(2); 
      if (promedio >= 6) {
        alert("Promedio: " + promedio + " - ¡Aprobado!");
      } else {
        alert("Promedio: " + promedio + " - Desaprobado.");
     }
    } else {
      alert("Debes ingresar solo valores numéricos para las notas.");
    }
  }
  
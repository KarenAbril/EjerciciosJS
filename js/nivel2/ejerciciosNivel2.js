//Variables globales
const btnEjercicioUno = document.getElementById("btnEjercicio1");
const btnEjercicioDos = document.getElementById("btnEjercicio2");
const btnEjercicioTres = document.getElementById("btnEjercicio3");
/**
 * Ejercicio 1, vamos a aprender el
 * DOM (document object model-permite acceder a los html
 * suma de dos números
 */
function ejercicioUno() {
  const numero1 = parseFloat(prompt("ingresa el número 1"));
  const numero2 = parseFloat(prompt("Ingresa el número 2"));
  const suma = numero1 + numero2;
  alert(suma);
}
/**
 * Ejericicio 2: operaciones matemáticas (suma-resta-multiplicación-divisón)
 */
function ejercicioDos() {
    //pedimos el número de opración entre 1 y 4
  const operacion = parseInt(
    prompt(
      "OPERACIONES MATEMÁTICAS BÁSICAS: \n Ingresa 1 para sumar. \n Ingresa 2 para restar. \n Ingresa 3 para multiplicar \n Ingresa 4 para dividir. "
    )
  );
  //validamos que la opción no sea errada o mayor que 4 o menor que 1
  if (isNaN(operacion) || operacion > 4 || operacion < 1) {
    return alert("Opción inválida,favor ingresar una opción entre 1, 2, 3 y 4")
  }
  const num1 = parseFloat(prompt("Ingrese número 1"));
  const num2 = parseFloat(prompt("Ingrese número 2"));
  let result = 0;
  console.log(num1, num2);
  //validamos que los números no sean errados
  if (isNaN(num1) || isNaN(num2)) {
    return alert("Favor ingresar números");
  }
//si todo lo anterior esta ok hacemos las operaciones matemáticas
  switch (operacion) {
    case 1:
      result = num1 + num2;
      alert("El resultado de la suma es: " + result);
      break;
    case 2:
      alert(num1 - num2);
      break;
    case 3:
      result = num1 * num2;
      alert("El resultado de la multiplicación es: " + result);
      break;
    case 4:
      if (num2 === 0) {
        alert("No es posible dividir por 0");
      } else {
        result = num1 / num2;
        alert("El resultado de la división es: " + result);
      }
      break;
  }
}
function ejercicioTres() {
    //datos ingresados por el usuario
    const name = prompt("Ingresa tu nombre");
    const cedula = prompt("Ingresa tu cédula");
    const age = parseInt(prompt("Ingresa tu edad"));
    //etiquetas a sobre escribir en el html
    const nameHtml = document.getElementById("name");
    const cedulaHtml = document.getElementById("cedula");
    const ageHtml = document.getElementById("age");
    //guardar datos en html
    nameHtml.innerHTML = "Tu nombre es: " + name
    cedulaHtml.innerHTML = "Tu cédula es: " + cedula
    ageHtml.innerHTML = "Tu edad es: " + age
}
//Eventos click
btnEjercicioUno.onclick = function () {
  ejercicioUno();
};
btnEjercicioDos.onclick = function () {
  ejercicioDos();
};
btnEjercicioTres.onclick = function () {
  ejercicioTres();
};

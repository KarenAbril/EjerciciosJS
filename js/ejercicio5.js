let userName = "";
let age = "";
let adress = "";
let civilStatus = "";
let id = "";
let celphone = "";
let mail = "";
let salary = 0;

function registerData() {
  userName = prompt("Ingrese su nombre");
  age = prompt("Ingrese su edad)");
  adress = prompt("Ingrese su dirección");
  civilStatus = prompt("Ingrese su estado civil");
  id = prompt("Ingrese su número de identificación)");
  celphone = prompt("Ingrese su número de teléfono)");
  mail = prompt("Ingrese su correo electrónico");
  salary = prompt("Ingrese su salario");
}

function registerData() {
  alert(
    "Tu nombre es: " +
      userName +
      " Tu edad es: " +
      age +
      " Tu dirección es: " +
      adress +
      " Tu estado civil es: " +
      civilStatus +
      " Tu número de identificación es: " +
      id +
      " Tu número de celular es: " +
      celphone +
      " Tu correo es: " +
      mail +
      " Tu salario es: " +
      salary
  );
}

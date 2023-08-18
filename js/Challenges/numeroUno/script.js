/**
 * 1. Crear la estructura básica del html
 * 2. Crear un h1 con el título : solicitud de datos
 * 3. Crear un boton que diga solicitar datos
 * 4. el botón debe llamar los siguientes prompt:
 * name-dni-adress-age-tel-mail-rh-civil status
 * 5. En el html mostraçr todos estos datos
 * 6. Los textos deben tener el mismo tamaño de fuente de 20 px y cada texto debe tener un color diferente
 * 7. Validar que ningún dato esté vacío, null o nan: sacar alert ("datos incompletos") no se mostraría ningún dato en pantalla
 */
const btnShowdata = document.getElementById("btnSolicitarDatos")

function solicitarDatos() {
  const name = prompt("Ingresa tu nombre");
  const dni = prompt("Ingresa tu cédula");
  const adress = prompt("Ingresa tu dirección");
  const age = parseInt(prompt("Ingresa tu edad"));
  const cellphone = parseInt(prompt("Ingresa tu número de teléfono"));
  const rh = prompt("Ingresa tu tipo de sangre");
  const civilStatus = prompt("Ingresa tu estado civil");

  if (name === null || name === "" || isNaN(dni) || adress === null || adress === "" || isNaN(age) || isNaN(cellphone) || rh === null || rh === "" || civilStatus === null || civilStatus === "") {
    return alert("Datos incompletos, por favor presione de nuevo el botón Solicitar Datos e ingrese todos los datos")
  }
  const nameHtml = document.getElementById("name");
  const dniHtml = document.getElementById("dni");
  const adressHtml = document.getElementById("adress");
  const ageHtml = document.getElementById("age");
  const cellphoneHtml = document.getElementById("cellphone");
  const rhHtml = document.getElementById("rh");
  const civilStatusHtml = document.getElementById("civilStatus");
  
  nameHtml.innerHTML = "Tu nombre es: " + name;
  dniHtml.innerHTML = "Tu cédula es: " + dni;
  adressHtml.innerHTML = "Tu dirección es: " + adress;
  ageHtml.innerHTML = "Tu edad es: " + age;
  cellphoneHtml.innerHTML = "Tu número de teléfono es: " + cellphone;
  rhHtml.innerHTML = "Tu tipo de sangre es: " + rh;
  civilStatusHtml.innerHTML = "Tu estado civil es: " + civilStatus;

  
}
btnShowdata.onclick = function () {
  solicitarDatos();
};

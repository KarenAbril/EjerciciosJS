/** Ingresar un departamento (Cundinamarca, quindio, antioquia, valle)
Ingresar objetivo de visita (turismo, comidas, museos)
Dependiendo de la opcion elegida
ejemplo1 (antioquia y comidas)
mostrar un alert("las comidas mas populares en antioquia son la bandeja paisa, arepa rellena etc" )
ejemplo 2: se ingreso cundinamarca y turismo
mostrar un alert(lugares para visitar en cundinamarca es monserrate, la candelaria etc)
alert("opcion no valida") en caso que no se ingrese alguna de las opciones
**/
let department = prompt(
  "Ingrese un departamento que quiera visitar entre: Cundinamarca, Quindío, Antioquia y Valle"
);
let purpose = prompt(
  "Ingrese el objeto de su visita entre: turismo, comidas, museos"
);
department = department.toLowerCase();
purpose = purpose.toLowerCase();

if (department === "cundinamarca" && purpose === "turismo") {
  alert("En Cundinamarca puedes visitar Monserrate y la Candelaria");
} else if (department === "cundinamarca" && purpose === "comidas") {
  alert("En Cundinamarca puedes comer ajiaco y almojabana");
} else if (department === "cundinamarca" && purpose === "museos") {
  alert(
    "En Cundinamarca puedes visitar el Museo del Florero y el Museo del Oro"
  );
} else if (department === "quindio" && purpose === "turismo") {
  alert("En el Quindio puedes visitar el Valle del Cocora y Filandia");
} else if (department === "quindio" && purpose === "comidas") {
  alert("En el Quindio puedes comer Mondongo y fiambre");
} else if (department === "quindio" && purpose === "museos") {
  alert(
    "En el Quindio puedes visitar La Casa del Museo Musical y el Museo de Arte de Armenia"
  );
} else if (department === "antioquia" && purpose === "turismo") {
  alert("En Antioquia puedes visitar El Parque Explora y el Pueblito Paisa");
} else if (department === "antioquia" && purpose === "comidas") {
  alert("En el Antioquia puedes comer Bandeja Paisa y Chorizo Antioqueño");
} else if (department === "antioquia" && purpose === "museos") {
  alert(
    "En Antioquia puedes visitar el Museo de Arte Moderno de Medellín y el Museo de Agua"
  );
} else if (department === "valle" && purpose === "turismo") {
  alert(
    "En el Valle puedes visitar el Zoológico de Cali y el Monumento a Cristo Rey"
  );
} else if (department === "valle" && purpose === "comidas") {
  alert("En el Valle puedes comer Cholado y Aborrajado");
} else if (department === "valle" && purpose === "museos") {
  alert(
    "En el Valle puedes visitar el Museo Aéreo Fénix y el Museo de la Caña"
  );
} else {
  if (department === null || department === "") {
    alert(
      "Favor ingrese un departamento entre Cundinamarca, Quindío, Antioquia y Valle"
    );
  } else if (purpose === null || purpose === "") {
    alert(
      "Favor ingrese el objeto de su visita entre: turismo, comidas, museos"
    );
  } else if (
    department !== "cundinamarca" ||
    department !== "quindio" ||
    department !== "antioquia" ||
    department !== "valle"
  ) {
    alert(
      "Favor ingrese otro departamento entre Cundinamarca, Quindío, Antioquia y Valle"
    );
  } else if (
    purpose !== "turismo" ||
    purpose !== "comidas" ||
    purpose !== "museos"
  ) {
    alert(
      "por favor indicar otro objeto de su visita entre turismo, comidas, museos"
    );
  }
}

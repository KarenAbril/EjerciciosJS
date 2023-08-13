/**
 * 1 - 
 * Ingresar un departamento (Cundinamarca, quindio, antioquia, valle)
 * alert("opcion no valida")
 * Dependiendo de que departamento es debe mostrar cual es la capital
 */


let department = prompt("Ingrese un departamento");

if (department === null || department === "") {
    alert("Favor ingrese un departamento entre Cundinamarca, Quindío, Antioquia y Valle");
} else {
    department = department.toLowerCase();
    if (department === "cundinamarca") 
    {alert("La capital es Bogotá")  
    } 
    else if (department === "quindio") {
    alert("La capital es Armenia")
    }
    else if (department === "antioquia") {
    alert("La capital es Medellín")
    }
    else if (department === "valle") {
    alert("La capital es Cali")
    }
    else if (department !== "cundinamarca" || department !== "quindio" || department !== "antioquia" || department !== "cali"){
        alert("por favor indicar otro departamento entre Cundinamarca, Quindío, Antioquia y Valle")
      }
        
    }
        




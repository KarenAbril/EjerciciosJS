const name = prompt("Ingresa tu nombre");
const age = prompt("Ingresa tu edad");
const country = prompt("Ingresa tu pais").toLowerCase();
const ability = prompt("Indica si eres zurdo o diestro").toLowerCase();

if (country === "colombia" || country === "ecuador" && age > "18" && ability === "zurdo")
 {
  alert("Quedas registrado al cupo de la beca");
} else {
  alert("No cumples los requisitos");
}

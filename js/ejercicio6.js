//CONDICIONALES
/**
 * Los condicionlaes nos permiten tomar decisiones
 * Operadores de comparación, cuando quiero comparar utilizo ==
 * con el (==) comparamos valores sin importar el tipo de dato
 * para ser más estrictos debemos por tres iguales ===
 * con === comparamos valores respetando el tipo de dato: cuando queremos que sea exactamente el mismo valor
 * (<=) menor o igual
 * (>=) mayor o igual
 * */
//declaramos la variable edadconst age = prompt("Ingresa tu edad")
//es const porque despues no le vamos a permitir cambiar el valor, si dijo que tiene esas edad no la vamos a cambiar más adelante.

//Vamos a usar el condicional if/else "16")
//la condición es un dato boleano
//if (age === "16") NO nos serviria para saber si la persona es mayor o menor que 16, nos sirve cuando queremos ver un valor exacto
//Entonces aquí entra el mayor y el menor que
/**OPERADORES LÓGICOS 
 * ahora haremos que de alemania no puedan ver
 * (||): para decir o
 * (&&): para decir y
 * (!-): para poner otra condición, significa: y diferente, aqui pusimos que sea un pais diferente a alemania
 * se llama "diferente"
 * los que tienen < o > sólo aplican para datos numéricos
 * (!=): no respeta tipo de datos
 * (!==): respeta tipo de datos: usar este
 * tolower.case: convierte la cadena de texto en minuscula.
 * */
const age = prompt("Ingresa tu edad")
const country = prompt("Ingresa tu país").toLowerCase()
if (age >= "16" && country !== "alemania") {
    alert("Se habilitó el catálogo de películas violentas")
} else {
    alert("No tienes permiso de ver este catálogo")
} 
//else funciona si la condición is no se cumple, es decir, si es true es if, si es false es else
//alert("Se habilitó el catálogo de películas violentas")
//nos va a salir dependiendo de la edad de la persona
//el alert muestra un texto
//alert("No tienes permiso de ver este catálogo")
/**NOTA: MAYÚSCULAS */
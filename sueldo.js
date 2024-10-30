let nombre = "Ismael"; 
let apellido = "Moriconi"; 
let sueldoActual = 20000; 
let porcentajeAumento = 25; 

let calculoAumento = (sueldoActual * porcentajeAumento) / 100; 

let nuevoSueldo = sueldoActual + calculoAumento; 

console.log("Hola, estimado " + nombre + " " + apellido);
console.log("En base a su sueldo actual: $" + sueldoActual);
console.log("Ha recibido un aumento del " + porcentajeAumento + "%: $" + calculoAumento.toFixed(2));
console.log("y su nuevo sueldo es de: $" + nuevoSueldo.toFixed(2));
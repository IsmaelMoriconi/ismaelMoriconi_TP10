let nombre = "Ismael";
let apellido = "Moriconi";
let edad = 22;
let numeroTelefono = "11-3345-5338";
let socio = true;
let fechaPartido = new Date("10-02-2025");
let horaPartido = "17:00";
let numeroSilla = 42;
let precioBoleto = 25000;


console.log("Información del boleto:");
console.log("Nombre:", nombre, "Tipo:", typeof nombre);
console.log("Apellido:", apellido, "Tipo:", typeof apellido);
console.log("Edad:", edad, "Tipo:", typeof edad);
console.log("Número de teléfono:", numeroTelefono, "Tipo:", typeof numeroTelefono);
console.log("Socio:", socio, "Tipo:", typeof socio);
console.log("Fecha del partido:", fechaPartido.toLocaleDateString(), "Tipo:", typeof fechaPartido);
console.log("Hora del partido:", horaPartido, "Tipo:", typeof horaPartido);
console.log("Número de silla:", numeroSilla, "Tipo:", typeof numeroSilla);
console.log("Precio del boleto:", precioBoleto.toFixed(2), "Tipo:", typeof precioBoleto);
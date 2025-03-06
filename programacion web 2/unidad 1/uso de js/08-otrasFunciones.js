const ciudadesDisponibles = new Array("santiago", "mario", "castillo");

const paisesDisponibles = new Array("chile", "argentina", "peru");
const cantidadCiudades = ciudadesDisponibles.length;

console.log(`Hay ${cantidadCiudades} ciudades disponibles`);
console.log(`en la lista hay ${paisesDisponibles.length} paises`);
//quitar primer elemento
ciudadesDisponibles.shift();

//quitar ultimo elemento
ciudadesDisponibles.pop();

//ordenar lista
ciudadesDisponibles.sort();

//posicion de un elemento
console.log(ciudadesDisponibles.indexOf("mario"));

//concatenar dos listas
const listaCompleta = ciudadesDisponibles.concat(paisesDisponibles);
console.log(listaCompleta);
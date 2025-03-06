let edadPerdonal = 17;
let conAcompañante = true;
const precioPasaje = 1000;
const ciudadDestino = "Sucre";
const ciudadesDisponibles = new Array("santiago", "mario", "castillo");

if(precioPasaje==1000)
{
    console.log("El precio del pasaje es 1000");
}
console.log(`veridicando pasaje para ${ciudadDestino}`);
if ((ciudadesDisponibles.indexOf(ciudadDestino) != -1) && (edadPerdonal >= 18 || conAcompañante))
{
    console.log("Pasaje disponible");
}
else{
    console.log("Pasaje no disponible");
}
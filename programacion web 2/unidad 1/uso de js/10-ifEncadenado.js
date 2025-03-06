const ciudadDestino = "Sucre";
const ciudadesDisponibles = new Array("santiago", "mario", "castillo");

let edadPasajero=17;
let compania=false;
if (edadPasajero>=18 || compania)
{
    if(ciudadDestino.indexOf(ciudadDestino)!=-1)
    {
        console.log("Pasaje disponible");
    }
    else {
        console.log("Ciudad no disponible");
    }
}
else {
    if (edadPasajero>=16 && ciudadDestino=="Sucre")
    {
        console.log("Pasaje disponible");
    }
    else {
        console.log("Pasaje no disponible");
    }
}

const ciudadesDisponibles = new Array("santiago", "mario", "castillo");
const precioPasaje = new Array(1000, 2000, 3000);
const presuDisponible = 2100;
let i=0;

while (precioPasaje[i]>presuDisponible && i<ciudadesDisponibles.length)
{
    console.log(`El pasaje a ${ciudadesDisponibles[i]} cuesta ${precioPasaje[i]}`);
    i++;
}
if (i==ciudadesDisponibles.length)
{
    console.log("No hay pasajes disponibles");
}
else{
    console.log(`se puede comprar el pasaje a ${ciudadesDisponibles[i]} por ${precioPasaje[i]}`);
}
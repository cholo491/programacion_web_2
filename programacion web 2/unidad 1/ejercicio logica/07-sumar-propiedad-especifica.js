const datos=
[
    {
        'propiedad especifica': 2,
    }
    ,
    {
        'propiedad especifica': 3,
    }
    ,
    {
        'propiedad especifica': 1,
    }
    ,
    {
        'propiedad especifica': 4,
    }
]
let suma = 0;
for (let i=0; i<datos.length; i++)
{
    suma = suma + datos[i]['propiedad especifica'];
}
console.log("La suma de las propiedades es: "+suma);
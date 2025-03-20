const numeros = new Array(1,2,3,4,5,6,7,8,9,10,12,11,11,11);
let repeticiones = 0;
let numeroMasRepetido = 0; 
let repeticionesMax = 0;   
for (let i=0; i<numeros.length; i++)
{
    for (let j=0; j<numeros.length; j++)
    {
        if (numeros[i]==numeros[j])
        {
            repeticiones++;
        }
    }
    if (repeticiones>repeticionesMax)
    {
        repeticionesMax = repeticiones;
        numeroMasRepetido = numeros[i];
    }
    repeticiones = 0;
}
console.log("El numero mas repetido es: "+numeroMasRepetido);

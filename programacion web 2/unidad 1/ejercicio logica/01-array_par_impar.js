const numeros = new Array(1,2,3,4,5,6,7,8,9,10);

const pares = new Array();
const impares = new Array();

for (let i=0; i<numeros.length; i++)
{
    if (numeros[i]%2==0)
    {
        pares.push(numeros[i]);
    }
    else {
        impares.push(numeros[i]);
    }
}
console.log("Pares: "+pares);
console.log("Impares: "+impares);
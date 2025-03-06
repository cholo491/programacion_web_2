const numero = new Array ("1","2","3","4","5","6","7","8","9","10");
let primos = new Array();
for (let i=0; i<numero.length; i++)
{
    let repeticiones = 0;
    for (let j=0; j<=numero[i]; j++)
    {
         if (numero[i]%j==0)
         {
             repeticiones++;
         }
    }
    if (repeticiones==2)
    {
        primos.push(numero[i]);
    }
}
console.log("Primos: "+primos);

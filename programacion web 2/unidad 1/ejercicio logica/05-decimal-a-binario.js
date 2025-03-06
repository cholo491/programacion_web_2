convertirBinario = decimal =>
    {
        let binario = "";
        while(decimal<=1)
        {
            decimal = decimal/2;
            binario = decimal%2 + binario;
        }
    }

const decimal = 128;
let binario = convertirBinario(decimal);
console.log("El numero "+decimal+" en binario es: "+binario);



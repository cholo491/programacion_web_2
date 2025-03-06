var frase = "paco roberto gimenes de las mercedes";
var palabras = frase.split(" ");
var palabraMasLarga = "";
for (var i = 0; i < palabras.length; i++) {
    if (palabras[i].length > palabraMasLarga.length) {
        palabraMasLarga = palabras[i];
    }
}
console.log("La palabra mas larga es: " + palabraMasLarga);
console.log ('connected')

let boton = document.getElementById("boton");

boton.addEventListener("click", function() {
    let frase = document.getElementById("frase").value;
    let contador = 0;

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === "a" || frase[i] === "A") {
            contador++;
        }
    }

    document.getElementById("resultado").textContent = "La letra 'a' aparece " + contador + " veces";
});
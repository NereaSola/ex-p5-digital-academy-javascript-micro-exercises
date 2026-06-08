import { obtenerCalificacion } from "./logic.js";

document.getElementById("boton").addEventListener("click", function() {
    let nombre = document.getElementById("nombre").value;
    let nota = Number(document.getElementById("nota").value);
    let calificacion = obtenerCalificacion(nota);

    let fila = `<tr><td>${nombre}</td><td>${calificacion}</td></tr>`;
    document.getElementById("tabla").innerHTML += fila;
});
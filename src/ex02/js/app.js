


const boton = document.getElementById('boton');

boton.addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const saludo = document.getElementById('saludo');
    saludo.textContent = 'Hola ' + nombre;
});
import { sumar, restar } from './logic.js';

console.log ('connected')
 
function calcular() {
  const num1 = parseFloat(document.querySelector('#num1').value);
  const num2 = parseFloat(document.querySelector('#num2').value);
  const operacion = document.querySelector('input[name="operacion"]:checked').value;
 
  if (isNaN(num1) || isNaN(num2)) {
    document.querySelector('#resultado').textContent = 'Introduce dos números válidos.';
    return;
  }
 
  let resultado, texto;
 
  if (operacion === 'suma') {
    resultado = sumar(num1, num2);
    texto = `La suma de ${num1} con ${num2} es ${resultado}`;
  } else {
    resultado = restar(num1, num2);
    texto = `La resta de ${num1} con ${num2} es ${resultado}`;
  }
 
  document.querySelector('#resultado').textContent = texto;
}
 
window.calcular = calcular;
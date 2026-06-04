import { findLargestOfThree } from './maths.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('checkerForm');
    const resultContainer = document.getElementById('resultContainer');
    const largestValueSpan = document.getElementById('largestValue');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const num3 = parseFloat(document.getElementById('num3').value);

        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            alert('Please enter valid numbers');
            return;
        }

        const largest = findLargestOfThree(num1, num2, num3);

        largestValueSpan.textContent = largest;
        resultContainer.classList.remove('number-checker__result--hidden');
    });
});
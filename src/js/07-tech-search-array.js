// Ejercicio 7: Buscador de índices
const technologies = ['JavaScript', 'Python', 'Java', 'C#', 'C++'];
const arrLengthTech = technologies.length;
let selectedTech = '';
let validEntry = false;

while (!validEntry) {
  const input = prompt(
    `Introduce un número del 1 al ${arrLengthTech} para elegir una tecnología:`
  );

  // 1. Validación de nulidad o vacío
  if (input === null || input.trim() === '') {
    alert('Error: No has ingresado nada.');
    continue; // Salta al inicio del bucle
  }

  // Convertimos a número para validar con precisión
  const numericInput = Number(input);

  // 2. Validación: ¿Es un número entero y está en el rango?
  if (!Number.isInteger(numericInput)) {
    alert('Error: Por favor, ingresa un número entero válido.');
  } else if (numericInput < 1 || numericInput > arrLengthTech) {
    alert(`Error: El número debe estar entre 1 y ${arrLengthTech}`);
  } else {
    // 3. Ajuste de índice (Human-friendly a 0-indexed)
    const internalIndex = numericInput - 1;
    selectedTech = technologies[internalIndex];
    validEntry = true;
  }
}

alert(`Has seleccionado la tecnología: ${selectedTech}`);

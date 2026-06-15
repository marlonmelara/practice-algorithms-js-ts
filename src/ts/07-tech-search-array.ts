// Ejercicio 7: Buscador de índices

/**
 * * En TS, definimos explícitamente que 'technologies' es un array de strings
 * para evitar mutaciones accidentales con otros tipos de datos.
 */

const technologies: string[] = ['JavaScript', 'Python', 'Java', 'C#', 'C++'];
const arrLengthTech: number = technologies.length;

let selectedTech: string = '';
let validEntry: boolean = false;

while (!validEntry) {
  // El prompt en el navegador puede devolver string o null
  const input: string | null = prompt(
    `Introduce un número del 1 al ${arrLengthTech} para elegir una tecnología:`
  );

  // 1. Validación de nulidad o vacío
  // Usamos el encadenamiento opcional o validación simple para el trim
  if (input === null || input.trim() === '') {
    alert('Error: No has ingresado nada.');
    continue;
  }

  // Convertimos a número. Number() devuelve NaN si la conversión falla.
  const numericInput: number = Number(input);

  // 2. Validación: ¿Es un número entero y está en el rango?
  // Number.isInteger es excelente para descartar decimales como 1.5
  if (!Number.isInteger(numericInput)) {
    alert('Error: Por favor, ingresa un número entero válido.');
  } else if (numericInput < 1 || numericInput > arrLengthTech) {
    alert(`Error: El número debe estar entre 1 y ${arrLengthTech}`);
  } else {
    // 3. Ajuste de índice (Human-friendly a 0-indexed)
    // TypeScript garantiza que 'selectedTech' recibirá un string
    selectedTech = technologies[numericInput - 1];
    validEntry = true;
  }
}

alert(`Has seleccionado la tecnología: ${selectedTech}`);

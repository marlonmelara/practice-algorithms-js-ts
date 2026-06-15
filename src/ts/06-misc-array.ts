// Ejercicio 6: Gestión de Array de Números

// Definimos el tipo de datos que manejaremos
const listNumbers: number[] = [];
const targetAmount: number = 6;

// 1. Captura de datos con validación estricta
for (let i = 0; i < targetAmount; i++) {
  let validEntry: boolean = false;

  while (!validEntry) {
    const input: string | null = prompt(
      `Introduce el número ${i + 1} de ${targetAmount}:`
    );

    // Validamos: que no sea nulo, que no esté vacío y que sea un número real
    if (input === null || input.trim() === '' || isNaN(Number(input))) {
      alert('Error: Por favor, introduce un número válido.');
    } else {
      listNumbers.push(Number(input));
      validEntry = true;
    }
  }
}

// 2. Visualización de datos
console.log('Contenido original:', listNumbers);

/**
 * Generamos el HTML de forma segura.
 * Usamos un array y join para mejorar el rendimiento en lugar de concatenar strings.
 */
const renderList = (): string => {
  const items: string[] = listNumbers.map((num: number) => `<li>${num}</li>`);

  return `
    <h1>Contenido del Array:</h1>
    <ul>
      ${items.join('')}
    </ul>
  `;
};

// Insertar en el DOM asegurando que el body existe
if (document.body) {
  document.body.innerHTML += renderList();
} else {
  console.error('No se encontró el elemento body en el documento.');
}

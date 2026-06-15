// Ejercicio 2

// Utilizando un bucle, mostrar la suma y la media de los número introducidos hasta introducir un número negativo y ahí mostrar el resultado

function calculateStatistics() {
  let sum = 0;
  let count = 0;
  let currentNumber = 0;

  do {
    const input = prompt('Introduce un número (negativo para terminar):');

    // Manejo de la cancelación del prompt (null) o entrada vacía
    // Esta validación surgió gracias al tipado 'string | null' de TS
    if (input === null || input.trim() === '') {
      alert('Entrada cancelada o vacía. Por favor, ingresa un número.');
      continue;
    }

    currentNumber = Number(input);

    // Validación de tipo y lógica de negocio
    if (Number.isNaN(currentNumber)) {
      alert('Por favor, introduce un número válido.');
    } else if (currentNumber >= 0) {
      sum += currentNumber;
      count++;
    }
  } while (currentNumber >= 0 || Number.isNaN(currentNumber));

  displayResults({
    sum: sum,
    count: count,
    average: count > 0 ? sum / count : 0,
  });
}

/**
 * Función auxiliar para mostrar los resultados
 */
function displayResults(stats) {
  if (stats.count > 0) {
    const message = `Suma total: ${stats.sum}\nMedia: ${stats.average}`;
    console.log(message);
    alert(message);
  } else {
    console.warn('No se introdujeron números válidos para calcular.');
  }
}

// Ejecución del programa
calculateStatistics();

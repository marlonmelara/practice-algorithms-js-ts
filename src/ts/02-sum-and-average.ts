// Ejercicio 2

// Utilizando un bucle, mostrar la suma y la media de los número introducidos hasta introducir un número negativo y ahí mostrar el resultado

/**
 * Interfaz para definir la estructura de los resultados estadísticos
 */
interface Statistics {
  sum: number;
  average: number;
  count: number;
}

/**
 * Calcula la suma y el promedio de números ingresados por el usuario
 * hasta que se introduce un número negativo.
 */
function calculateStatistics(): void {
  let sum: number = 0;
  let count: number = 0;
  let currentNumber: number = 0;

  do {
    const input: string | null = prompt(
      'Introduce un número (negativo para terminar):'
    );

    // Manejo de la cancelación del prompt (null) o entrada vacía
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

  displayResults({ sum, count, average: count > 0 ? sum / count : 0 });
}

/**
 * Función auxiliar para mostrar los resultados de forma limpia
 */
function displayResults(stats: Statistics): void {
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

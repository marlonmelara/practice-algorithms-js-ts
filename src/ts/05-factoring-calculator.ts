// Ejercicio 5
// Mostrar todos los divisores de un número dado

/**
 * Calcula todos los divisores de un número entero positivo.
 * @param value - El número a factorizar.
 * @returns Un arreglo de números que son divisores exactos.
 */

function getFactors(value: number): number[] {
  // Validación de integridad en tiempo de ejecución
  if (value <= 0 || !Number.isInteger(value)) {
    throw new Error('El valor debe ser un número entero mayor a cero');
  }

  const factors: number[] = [];

  // Optimizamos el algoritmo: un divisor no puede ser mayor a la mitad del número
  // (excepto el número mismo)
  for (let i = 1; i <= value; i++) {
    if (value % i === 0) {
      factors.push(i);
    }
  }

  return factors;
}

/**
 * Presenta los resultados de la factorización.
 * @param input - Valor de entrada (tipado como number para asegurar consistencia).
 */
function displayFactoring(input: number): void {
  try {
    const result = getFactors(input);
    console.log(`Los factores de ${input} son: ${result.join(', ')}`);
  } catch (error: unknown) {
    // Type Guard para manejar el error de forma segura
    const errorMessage =
      error instanceof Error ? error.message : 'Error inesperado';
    console.error(`Hubo un problema: ${errorMessage}`);
  }
}

// Ejemplo de uso
displayFactoring(100);

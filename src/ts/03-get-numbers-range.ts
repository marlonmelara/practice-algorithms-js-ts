// Ejercicio 3
// Hacer un programa que muestre todos los números entre dos números

/**
 * Retorna un arreglo con los números enteros situados entre dos valores.
 * @param a - Primer límite del rango.
 * @param b - Segundo límite del rango.
 * @returns Un arreglo de números enteros.
 */
export function getNumbers(a: string | number, b: string | number): number[] {
  const numA = Number(a);
  const numB = Number(b);

  if (isNaN(numA) || isNaN(numB)) {
    throw new Error(
      'Los valores deben ser números o strings numéricos válidos'
    );
  }

  const min = Math.min(numA, numB);
  const max = Math.max(numA, numB);

  const numbersResult: number[] = [];
  const start = Math.floor(min) + 1;

  for (let i = start; i < max; i++) {
    numbersResult.push(i);
  }

  return numbersResult;
}

/**
 * Orquesta la lógica de obtención y muestra el resultado en consola.
 */
export function displayResult(a: string | number, b: string | number): void {
  try {
    const result = getNumbers(a, b);

    if (result.length === 0) {
      console.info('No hay números enteros que mostrar en el rango provisto');
      return;
    }

    console.log(`Números en el rango: ${result.join(', ')}`);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Error desconocido';
    console.error(`Hubo un problema: ${message}`);
  }
}

displayResult('10', 15);

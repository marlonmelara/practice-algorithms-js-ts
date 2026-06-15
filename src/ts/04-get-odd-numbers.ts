// Ejercicio 4
// Mostrar todos los números impares que hay entre dos números

/**
 * Retorna un array con los números impares situados entre dos valores.
 * @param a - Primer número (límite)
 * @param b - Segundo número (límite)
 */
function getOddNumbers(a: number | string, b: number | string): number[] {
  const numA = Number(a);
  const numB = Number(b);

  if (isNaN(numA) || isNaN(numB)) {
    throw new Error(
      'Los valores deben ser números o cadenas numéricas válidas'
    );
  }

  const min = Math.min(numA, numB);
  const max = Math.max(numB, numA);

  const oddNumbersResult: number[] = [];

  const start = min + 1;

  for (let i = start; i < max; i++) {
    if (i % 2 !== 0) {
      oddNumbersResult.push(i);
    }
  }

  return oddNumbersResult;
}

function displayResult(a: number | string, b: number | string): void {
  try {
    const result = getOddNumbers(a, b);

    if (result.length === 0) {
      console.log('No hay impares');
    } else {
      console.log(result);
    }
  } catch (error) {
    // Validamos que el error sea una instancia de Error para acceder a .message con seguridad
    if (error instanceof Error) {
      console.error(`Hubo un problema: ${error.message}`);
    }
  }
}

displayResult('20', 10);

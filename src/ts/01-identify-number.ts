// Ejercicio 1
// Crea un programa que pase dos números y que nos diga cuál es el mayor, el menor y si son iguales.

/**
 * Compara dos números y devuelve una cadena describiendo su relación.
 * @param a - El primer número a comparar
 * @param b - El segundo número a comparar
 */
function identifyNumber(a: number, b: number): string {
  if (a > b) {
    return `${a} es mayor y ${b} es el menor`;
  } else if (b > a) {
    return `${b} es mayor y ${a} es el menor`;
  } else {
    return 'Ambos números son iguales';
  }
}

// En TypeScript, este código ni siquiera compilaría si intentas pasar un string.
// El error se detecta en tiempo de escritura, eliminando la necesidad de validar tipos manualmente.
const result = identifyNumber(1, 10);
console.log(result);

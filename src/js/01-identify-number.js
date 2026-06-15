// Ejercicio 1
// Crea un programa que pase dos números y que nos diga cuál es el mayor, el menor y si son iguales.
function identifyNumber(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Ambos valores deben ser números');
  }

  if (a > b) {
    return `${a} es mayor y ${b} es el menor`;
  } else if (b > a) {
    return `${b} es mayor y ${a} es el menor`;
  } else {
    return 'Ambos números son iguales';
  }
}

// Estructura de control para manejar la ejecución
try {
  const result = identifyNumber(10, 7);
  console.log(result);
} catch (error) {
  console.error(`Hubo un problema: ${error.message}`);
}

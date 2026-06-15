// Ejercicio 3
// Hacer un programa que muestre todos los números entre dos números

function getNumbers(a, b) {
  const numA = Number(a);
  const numB = Number(b);
  if (isNaN(numA) || isNaN(numB)) {
    throw new Error('Los valores deben ser números válidos');
  }

  const min = Math.min(numA, numB);
  const max = Math.max(numA, numB);

  const numbersResult = [];

  const start = min + 1;

  for (let i = start; i < max; i++) {
    numbersResult.push(i);
  }

  return numbersResult;
}

function displayResult(a, b) {
  try {
    const result = getNumbers(a, b);
    if (result.length === 0) {
      console.log('No hay números enteros que mostrar en el rango provisto');
    } else {
      console.log(`Números en el rango: ${result}`);
    }
  } catch (error) {
    console.error(`Hubo un problema: ${error.message}`);
  }
}

displayResult('10', 15);

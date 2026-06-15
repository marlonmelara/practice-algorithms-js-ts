// Ejercicio 5
// Mostrar todos los divisores de un número dado

function getFactors(value) {
  const num = Number(value);

  if (isNaN(num) || num <= 0 || !Number.isInteger(num)) {
    throw new Error('El valor debe ser un número entero mayor a cero');
  }

  const factors = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }

  return factors;
}

function displayFactoring(input) {
  try {
    const result = getFactors(input);
    console.log(`Los factores de ${input} son ${result.join(', ')}`);
  } catch (error) {
    console.error(`Hubo un problema: ${error.message}`);
  }
}

displayFactoring('100');

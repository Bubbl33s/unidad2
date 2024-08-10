// Potencia
const powerOfTwo = (number) => {
  if (number <= 0) {
    return 1;
  }
  
  let respuesta = 2;
  
  for (let i = 1; i < number; i++) {
    respuesta *= 2;
  }
  
  return respuesta;
};

// Invertir un arreglo

const nombres = [
    'carlos',
    'sara',
    'Erik',
    'Ivonne',
    'Alberto',
    'Leo',
    'Alex',
    'Airy',
    'freddy',
    'Jose'
  ]
  
  /**
   Construir una funcion que separe los nombres largos de los cortos
   un nombr elargo es aquel que supera los 4 caracteres de longitud
  
   cortos: Leo Alex sara Erik Airy Jose
   largos: todos los demas
   */

  function separar (nombres) {
      console.log(nombres.length > 4);
      console.log(nombres.length <= 4);
  }

  separar()

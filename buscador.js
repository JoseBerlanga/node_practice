// const nombre = process.argv[2]

// if (nombre) {
// console.log(`Hola ${nombre}`)
// } else {
//     console.log('Identificate');
// }

// EJERCICIO 1
// generar un script que reciba parametros desde consola
// y nos diga si el nombre dado existe en la lista

const nombres = process.argv [
    'carlos',
    'sara',
    'Erik',
    'Ivonne',
    'Alberto',
    'Leo',
    'Alex',
    'Airy',
    'freddy',
    'Jose',
    'carlo'
  ]


if (nombres) {
console.log(`${nombres} si existe`);
} else {
    console.log('no existe');
}
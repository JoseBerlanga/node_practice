/**
 * Construir un muro
 * 
 * - Construir
 * - Aplanar
 * - Pintar
 */

//  const muro = {
//     construido: false,
//     aplanado: false,
//     pintado: false
//   }
  

//   function construir (unMuro) {
//     return new Promise ((resolve, reject) => {
//       setTimeout (() => {
//         unMuro.contruido = true

//         if (!unMuro.contruido) {
//           reject(new Error('no se pudo contruir'))
//           return
//         }

//         resolve(unMuro)
        
//       }, 2000)
//     })
//   }

  
//   function aplanar (unMuro) {
//     return new Promise ((resolve, reject) => {
//       setTimeout(() => {
//         unMuro.aplanado = true

//         if (!unMuro.aplanado) {
//           reject(new Error('No se pudo aplanar'))
//           return
//         }

//         resolve(unMuro)
//       }, 2000)
//     })
//   }



//   function pintado (unMuro) {
//     return new Promise ((resolve, reject) => {
//       setTimeout(() => {
//         unMuro.pintado = true

//         if (!unMuro.pintado) {
//           reject(new Error('No se pudo pintar'))
//           return
//         }

//         resolve(unMuro)
//       }, 2000)
//     })
//   }
  
// //  construir(muro)
// //   .then((unMuroConstruido) => {
// //     console.log('muroConstruido: ', muroConstruido)
// //     aplanar(muroConstruido)
// //       .then((unMuroAplanado) => {
// //           console.log('muroConstruido: ', muroConstruido)
// //           pintar(muroConstruido)
// //             .then((unMuroAplanado => {
// //               console.log('muroConstruido: ', muroConstruido)
// //       })
// //       .catch((error) => {
// //         console.error('ERROR: ', error)
// //   })
// //   .catch((error) => {
// //     console.error('ERROR: ', error)
// //   })



//   // Promesas
//   // new promise (resolve, reject) => {}

//   // resolve --> es una FUNCIAON que vamos a ejecutar cuando la promesa debe pasar de pendiente a resuelta
//   // resolve --> es una FUNCIAON que vamos a ejecutar cuando la promesa debe pasar de pendiente a rechazada

//   // la promesa creada (objeto) tendra dos metodos: then y catch
//   // El then se ejecuta cuando la promesa es resuelta
//   // el catch se ejecuta cuando la promesa es rechazada


// //   // ASYNC AWAIT

// //   // async --> palabra reservada que ocupamos para marcar una funcion asyncrona (toda aquella que usa await internamente)
// //   //  await --> palabra reservada que usamos para esperar la resolucion de la promesa

// // async function principal () {
// //   const muroConstruido = await construir(muro)
// //   const unMuroAplanado = await aplanar(muroConstruido)
// //   const unMuroPintado = await pintar(unMuroPintado)

// //   console.log('muroPintado: ', muroPintado)
// // }

// // principal()
// //   .then (() => {
// //     console.log('FIN')
// //   })
// //   .catch((error) => {
// //     console.error ('ERROR: ', error)
// //   })


// // EJERCICIO 

// /**
//  * Usando funciones asicronas de promesas (fsPromises)
//  * 1. Crear un archivo hola.txt
//  * 2. usar la funcion appendFile para agregar una segunda linea
//  * 3. despues de 5 segundos eliminar el archivo (fs.unlink)
//  */

// // PASO 1

// const fs = require ('fs')

// const sheet = 'hola2.txt'

// function result(error) {
//   if(!error) {
//     return new Promise ((resolve, reject)
//     fs.writeFile(sheet, 'Texto 1', 'utf8', (error) => {
//       setTimeout(() => {
//         console.log('Correcto: ');
//         return
//       }, 2000)
//     })

//     // PASO 2

//     fs.appendFile(sheet, 'Texto 2', (error) => {
//       setTimeout(() => {
//         console.log('Correcto');
//         return
//       }, 2000)
//     })

//     // PASO 3

//     fs.appendFile(sheet, (error) => {
//       setTimeout(() => {
//         console.error('ERROR: ', error);
//       }, 5000)
//     })
//   }
// }


// EJERCICIO TERMINADO

const fs = require('fs/promises')

const file = 'texto.txt'

// then y catch
fs.writeFile(file, 'hola1', 'utf8')
.then(() => {
  console.log('archivo creado')
  fs.appendFile(file, '\nLinea nueva', 'utf8')
    .then(() => {
      console.log('linea agregada');
    })
})
.catch(() => {
  console.log('ERROR:', error)
})




// ASYNC AWAIT
async function main () {
  await fs.writeFile('text-async-await.txt', 'texto1',  'utf8')
  await fs.appendFile('text-async-await.txt', 'texto2',  'utf8')
}

main()
  .then(() => {
    console.log('FIN (Async await)')
  })
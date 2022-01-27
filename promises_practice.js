// fs.writeFile - fs.appendFIle - fs.unlink - 

// EJERCICIO TERMINADO

const fs = require('fs/promises')

const file = 'texto.txt'

// then y catch
fs.writeFile(file, 'hola1', 'utf8')
.then(() => {
  console.log('archivo creado')
  fs.appendFile(file, '\nLinea nueva', 'utf8')
    .then(() => {
      console.log('linea agregada')
    //   fs.unlink(file)
    //     .then(() => {
    //         console.log('archivo eliminado')
            fs.mkdir('prueba')
            .then(() => {
                console.log('carpeta de prueba creada')
                fs.rename('prueba', 'nuevaPrueba')
                .then(() => {
                    console.log('carpeta renombrada')
                })
                .catch(() => {
                    console.log('ERROR: ', error)
                })
            })
            .catch(() => {
                console.log('ERROR: ', error)
            })
        // })
        // .catch(() => {
        //     console.log('ERROR:', error)
        // })
    })
    .catch(() => {
        console.log('ERROR:', error)
    })
})
.catch(() => {
  console.log('ERROR:', error)
})




// ASYNC AWAIT
// async function main () {
//   await fs.writeFile('text-async-await.txt', 'texto1',  'utf8')
//   await fs.appendFile('text-async-await.txt', 'texto2',  'utf8')
// }

// main()
//   .then(() => {
//     console.log('FIN (Async await)')
//   })

/**
 * 1.- Se tiene que poner "new promise (resolve, reject) =>{}"
 */
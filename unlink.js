/**
 * Usando funciones asicronas
 * 1. Crear un archivo hola.txt
 * 2. usar la funcion appendFile para agregar una segunda linea
 * 3. despues de 5 segundos eliminar el archivo (fs.unlink)
 */

const fs = require ('fs')

function result(error) {
    if (!error) {
        console.log('El archivo fue escito exitosamente')
    } else
    console.log(`Error: ${error}`)
}

// function erase () {
//     setTimeout(result, 1000)
// }

fs.writeFile('hola2.txt', 'Archivo unlink', result)
fs.appendFile('hola2.txt', '-Mi nombre', result)
// fs.unlink('hola2.txt', erase)




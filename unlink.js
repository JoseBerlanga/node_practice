const fs = require ('fs')

function result(error) {
    if (error) {
        console.log('hubo un error', error)
        return
    }
    console.log('El archivo fue escito exitosamente')
}

fs.writeFile('hola2.txt', 'Archivo unlink', result)
fs.appendFile('hola2.txt', 'Mi nombre', result)
fs.unlink('hola2.txt', result)
const fs = require ('fs')

function result(error) {
    if (!error) {
        console.log('El archivo fue escito exitosamente')
        return
    }
    console.log(`Error: ${error}`)
}


fs.writeFile('hola2.txt', 'Archivo unlink', result)
fs.appendFile('hola2.txt', '-Mi nombre', result)
fs.unlink('hola2.txt', result)
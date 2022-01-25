const fs = require('fs')

function join() {
    if (error) {
        console.log('hubo un error', error)
        return
    }
    console.log('El archivo fue escito exitosamente')
}

fs.appendFile('Name.txt', 'Jose Juan Carrillo', join)
const fs = require('fs')

function atTheEnd(error) {
    if (error) {
        console.log('hubo un error', error)
        return
    }
    console.log('El archivo fue escito exitosamente')
}

fs.writeFile('hola.txt', 'hola a todos desde el nuevo archivo', 'utf8', atTheEnd)
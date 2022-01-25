const muro = {
    construido: false,
    aplanado: false,
    pintado: false
}

function construir (unMuro) {
    unMuro.construido = true
    return unMuro
}

function aplanar (unMuroContruido) {
    unMuroContruido.aplanado = true
    return unMuroContruido
}

function pintar (unMuroAplanado) {
    unMuroAplanado.pintado = true
    return unMuroAplanado
}
const muroConstruido = construir(muro)
const muroAplanado = aplanar(muroConstruido)
const muroPintado = pintar(muroAplanado)

console.log(('muroAplanado: ', muroPintado));
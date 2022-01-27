/**
 * Construir un muro
 * 
 * - Construir
 * - Aplanar
 * - Pintar
 */

 const muro = {
    construido: false,
    aplanado: false,
    pintado: false
  }
  
  function construir (unMuro, unaFuncion) {
    setTimeout(() => {
      unMuro.construido = true
      unaFuncion(null, unMuro)
    }, 2000)
  }
  
  function aplanar (unMuroConstruido) {
    setTimeout(() => {
      unMuroConstruido = true
      unaFuncion(null, unMuroConstruido)
    }, 2000)
  }
  
  function pintar (unMuroAplanado) {
    setTimeout(() => {
      unMuroAplanado = true
      unaFuncion(null, unMuroAplanado)
    }, 2000)
  }
  
  construir({ ...muro }, (error, muroConstruido) => {
    aplanar(muroConstruido, (error, unMuroAplanado) => {
      pintar(unMuroAplanado, (error, unMuroPintado) => {
        console.log('muro listo: ', unMuroPintado) 
      })
    })
  })

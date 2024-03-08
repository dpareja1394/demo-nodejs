//console.log('Hola')
//console.info('Hola info')

//globalThis variable local en toda nuestra aplicación. Podemos acceder 
console.log(globalThis)
globalThis.console.log('hola')

// Patrón de diseño módulo
//CommonJS Module
const { sum } = require('./sum')

globalThis.console.log('suma ', sum(23, 5))
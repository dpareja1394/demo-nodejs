const fs = require('node:fs')

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log('primer texto:', text)
}) //forma asíncrona de leer archivos

console.log('Hacer algo mientras lee el archivo')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log('segundo texto:', text)
})


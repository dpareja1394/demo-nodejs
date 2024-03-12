// fs -> File System
const fs = require('node:fs') // a partir de Node 16, se recomienda poner : antes de Node

// NodeJS está basado en eventos
const stats = fs.statSync('./archivo.txt')

//Forma síncrona
console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size
)
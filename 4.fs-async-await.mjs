// Esto sólo en los módulos nativos que no tienen promesas nativas
// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

import { readFile } from 'node:fs/promises'

// IIFE - Inmediatly Invoked Function Expression
(
    async() => {
        const text = await readFile('./archivo.txt', 'utf-8');
        console.log('primer texto', text)
    }

)()




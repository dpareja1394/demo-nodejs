// .js -> Por defecto utiliza CommonJS
// .mjs -> para utilizar ES Modules
// .cjs -> para utilizar CommonJS

import {sum, sub, mult} from './sum.mjs'

console.log(sum(5,3))
console.log(sub(5,3))
console.log(mult(5,3))
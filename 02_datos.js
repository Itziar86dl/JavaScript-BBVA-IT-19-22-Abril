4 // number
4.6 // number
-9  // number
'Pepe' // string
true // boolean
false // boolean

undefined // undefined
null // null

// ES tipado debil y dinámico

// Tipos primitivos

let x
console.log(x, typeof x)
x = 4
console.log(x, typeof x)
x = 'Pepe'
console.log(x, typeof x)
x = true
console.log(x, typeof x)
x = null
console.log(x, typeof x)
x = Symbol()
console.log(x, typeof x)
x = 9007199254740991n
console.log(x, typeof x)

// Tipos referenciados (= Objetos)

x = {nombre: 'Pepe', edad: 32, isAlumno: true}
console.log(x, typeof x)
x = ['Pepe', 32, true]
console.log(x, typeof x)
x = ['Pepe', 'Juan', 'Rosa', 'Elena']
console.log(x, typeof x)
x = new Date()
console.log(x, typeof x)
x = function() {}
console.log(x, typeof x)

let name = 'Pepe'
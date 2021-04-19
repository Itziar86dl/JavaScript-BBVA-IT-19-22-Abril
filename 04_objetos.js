let o = {nombre: 'Pepe', edad: 32, isAlumno: true}
o.altura = 180
o.amigos = [
    'Juan', 
    'Rosa', 
    {nombre: 'Ernestina', edad: 38, isAlumno: true}
]

let p = o // Copia por referencia
let q = {...o} // Clonado

o.nombre = 'Ramon'

console.log(o.nombre)
console.log(p.nombre)
console.log(q.nombre)




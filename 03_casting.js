let x = 32
console.log(x)
let y = '2.9'
console.log(x / y)
console.log(typeof y)
y = 'Pepe'
let z = x / y
console.log(z, typeof z)
console.log(typeof y)

console.log(-x/0)

// Casting a Boolean: expresiones booleanas
let n
n = ''
n = 0
n = null
n = 'Pepe'/2
n = false
if(n) {
    console.log('Verdadero')
} else {
    console.log('Falso')
}

console.log(1 -'2')
console.log('Hola ' + 'Mundo')
console.log(1 + 2)
console.log(1 + Number('2'))
console.log(1 + +'2')
console.log(1 + parseInt('2'))


function sumar(a,b) {
    /* let r = +a + +b
    if(isNaN(r))
     {
        return 'Operación no valida'
    }
    return r */
    return isNaN(+a + +b) ? 'Operación no valida' : +a + +b

}

console.log(sumar('2', '-6'))
console.log(sumar('2', 'Pepe'))
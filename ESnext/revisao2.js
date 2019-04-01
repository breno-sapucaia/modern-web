// Arrow function
const soma = (a, b) => { return a + b} 
console.log(soma(1, 9))

//Arrow function (this)
const lexico1 = () => console.log(this === exports )
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametros default
function log(texto ='Node'){
    console.log(texto)
}
log()
log('Sou mais forte')

//operador rest, transforma os parametros em um agrupamento de arrays
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5))
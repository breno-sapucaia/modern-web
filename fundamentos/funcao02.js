//armazenando uma funcao em uma variável
const imprimirSoma = function (a, b){
    console.log( a+b)
}

imprimirSoma(2,3)

//armazenando uma funcao arrow em uma variável
const soma = (a,b) => {
  return ( a + b)
}

const soma2 = (a, b) => (a + b)
console.log(soma(2, 3))

//retorno implícito

const subtracao = (a,b) => a - b
console.log(subtracao(2, 3))
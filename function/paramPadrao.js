// estrategia 1 para gerar valor padrão
function soma1(a ,b ,c){
    a = a || 1
    b = b || 1
    b = b || 1
    return a + b + c
}

console.log(soma1(3))

function soma2(a ,b ,c){
    a =  a!== undefined ? a : 1
    b = 1 in arguments
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//valor padrao
function soma3(a = 1, b = 1, c= 1){
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))
Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota){
    if(nota.entre(9,10)){
        console.log('Quadro de honra')
    } else if(nota.entre(7, 8.99)){
            console.log('Aprovado')
    }
}
const carrinho = [
    '{"nome":"Borracha","preco":3.45}',
    '{"nome":"Caderno","preco":13.90}',
    '{"nome":"Kit de Lapis","preco":41.22}',
    '{"nome":"Caneta","preco":7.50}',
]
carrinhoObj = {
   preco: []
}

carrinho.forEach(function(nome,indicie,array){
    const vetor = Object.entries(JSON.parse(nome,indicie))
    
    for(let i = 0; i < vetor.length; i++){
        a=0
        if (i % 2 == 1){
            carrinhoObj.preco[a] = vetor[i]
            console.log(carrinhoObj.preco[a])
        }
    }
})
for(x in carrinhoObj.preco){
    console.log(carrinhoObj.preco[x])
}
    //for( let i in vetor) {
    //    Object.entries(JSON.parse(nome,indicie))
    //    carrinhoObj.preco[i] =  Object.entries(JSON.parse(nome,indicie))
    //} 


//function produto(){
//    for (let i in carrinhoObj){
//        console.log(carrinhoObj.preco[i])
//    }
//
//}
//produto()
function criarProduto(nome, preco, desconto = 0.1){
    return {
        nome,
        preco,
        desconto
    }
}

console.log(criarProduto('notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))
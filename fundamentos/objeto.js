const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto-Legal'] = 0.40 // evitar atributos com espaços

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.99,
    botao:{
        cor: 'vermelho',
        tamanho: 3
    }
}

console.log(prod2.botao)
const produto = Object.preventExtensions({
    nome:'Qualuqer', preco: 1.99, tag:'promoção'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)
//muda e deleta mas n adiciona
const pessoa = {nome: 'Juliana', idade: 35}

Object.seal(pessoa)

console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
pessoa.idade =29
console.log(pessoa)


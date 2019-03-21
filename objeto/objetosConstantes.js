// pesso --> [endereço de memória x] --> {...}
const pessoa = { nome : 'jonas' }
pessoa.nome = 'Pedro'
console.log(pessoa)
// pessoa <-- [endereço de memória y] <--{....}
//pessoa = {nome: 'Ana'}
Object.freeze(pessoa)
pessoa.nome = "Maria"
pessoa.end = "RUA 123"

console.log(pessoa.nome)
console.log(pessoa.end)

const pessoaConstante = Object.freeze({nome:'joao'})
console.log(pessoaConstante)

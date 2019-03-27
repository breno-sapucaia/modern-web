const alunos = [
    { nome: 'João', nota: 7.9},
    { nome: 'Maria', nota: 9.2},
    { nome: 'Maria', nota: 9.2},
    

]
const carro =[
    { nome: 'uno', valor: 9000},
    { nome: 'IPVA', valor: 500}
]
//imperativa
let total1 = 0
for (let i =0; i< alunos.length ; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

let total2 = 0
for (let i = 0; i< carro.length; i++){
    total2 += carro[i].valor
}
console.log(total2)

//declarativo
const getValor = carro => carro.valor
const getNota = aluno => aluno.nota
const soma = (total,atual) => total + atual
//    variavel  array  funcacao(callback) funcao(funcao)
const total2 = alunos.map(getNota).reduce(soma)
const total3 = carro.map(getValor).reduce(soma)
console.log(total2 / alunos.length)
console.log(total3)

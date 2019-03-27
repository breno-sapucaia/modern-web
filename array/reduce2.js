const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: false },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: false }
]

// Todos os alunos são bolsistas?

const resultado = alunos.filter(a => a.bolsista)

console.log(alunos.length)
console.log(resultado.length)

if (resultado.length == alunos.length){
    console.log("Todos os alunos são bolsistas")
}

if (resultado.length > 1){
    console.log("No mínimo 1 aluno é bolsista")
}else{
    console.log("Nínguem é bolsista")
}
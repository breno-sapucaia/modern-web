//operador ..rest(juntar)/spread(espalhat)


//usar spread com objeto
const funcionario ={nome:'Maria', salario: 988.00}
const clone = {ativo: true, ...funcionario}
console.log(clone)

const grucpoA = ['joão', 'pedro', 'gloria']
const grupoB = ['Maria', 'rafaela', ...grupoA , 'Rafaela']
console.log(grupoB)

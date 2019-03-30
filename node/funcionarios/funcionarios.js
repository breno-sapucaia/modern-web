const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    let salarioAtual = 0
    let resultado = 0
    const apenasChina = func =>  func.pais == 'China' && func.genero == 'F'
    const apenasSalario = func => func.salario
    
    funcionarios.filter(apenasChina).map(apenasSalario).forEach(function(salario, indicie,array) {
        if(indicie == 0){
            salarioAtual = salario
        }else if (salarioAtual > salario){
            salarioAtual = salario
        }
        if(array.length -1 == indicie){
        resultado = salarioAtual
        return console.log(`O menor salário é R$:${salarioAtual}`)
        }
    })
    const obj = func => func.salario == salarioAtual
    console.log(funcionarios.filter(obj))
})



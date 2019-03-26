class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.vakir = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.vakir
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario',4500)
const contaDeLuz =  new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2019)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())
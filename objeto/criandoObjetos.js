// usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome = 'x', preco = 1, desc = 1) {
    //variavel pública
    this.nome = nome

    //metodo publico
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto()
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory (fabricadora)
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase/30) * (30 - faltas * 2)
        }
    }
}
    const f1 = criarFuncionario('Joao',3000,1)
    console.log(f1.getSalario())


// Object.Create

const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)


// uma função famosa que retoran objeto

const fromJSON = JSON.parse('{"info":"Sou um Jason"}')
console.log(fromJSON.info)
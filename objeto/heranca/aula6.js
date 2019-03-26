function Aula(nome, videoID) {
    this.nome = nome
    this.videID = videoID
}

const aula1 = new Aula ('Bem Vindo', 123)
const aula2 = new Aula ('Até Breve', 456)
//console.log(aula1, aula2)

// simulando o new
function novo(f, ...params){
    const obj = {}
    obj.__proto__ =f.prototype
    f.apply(obj,params)
    return obj
}

function c(x){
    return console.log(x)
}
c('voce é totalmente gay')
c(2)
const aula3 = c(novo(Aula, 'Bem Vindo',123))
const aula4 = c(novo(Aula, 'Até breve',456))
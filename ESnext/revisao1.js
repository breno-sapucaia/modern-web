// let e const 
{
    let a = 2
    let b =3
    console.log(b)
}
//console.log(a)

// Template String
const produto ={}
produto.nome = 'ipad'
console.log(`${produto.nome}`)

// Destructuring
const [l,e,t,r,a] = "Cod3r"
console.log(l,e,t,r,a)

const [x, ,y] = [1,2,3]
console.log(x,y)

//desestrutrar valores de atributos de objetos usamos chaves {}
const {idade:i, nome} = {nome:'ana', idade:9}
console.log(i,nome)
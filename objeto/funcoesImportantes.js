const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${[chave]}: ${[valor]}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,//mostra no .keys()
    writable: false,// frezze de atributo
    value: '01/01/2019'
})
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMASript 2015)
const dest = { a:1}
const o1 = {b :2}
const o2 = {c:3 , a: 4}
const obj = Object.assign(dest, o1, o2)
console.log(Object.entries(obj))

Object.freeze(obj)//o diretório da memória do obj vira inalterável
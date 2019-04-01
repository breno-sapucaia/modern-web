require('nodemon')
for( let letra of "Cod3r"){
    console.log(letra)
}
const assuntosEcma = ['Map', 'Set', 'Promise']

for(let i in assuntosEcma){
    console.log(i)
}
for (let assuntos of assuntosEcma){
    console.log(assuntos)
}

const assuntosMap = new Map([
    ['Map', { abordado: true}],
    ['Set', { abordado: true}],
    ['Promise', {abordado: false}]
])

console.log('----chave/valores----')
for(let assunto of assuntosMap){
    console.log(assunto)
}
console.log('----chaves----')
for (let chave of assuntosMap.keys()){
    console.log(chave)
}
console.log('--valores--')
for (let valores of assuntosMap.values()){
    console.log(valores)
}
console.log('-----ENTIDADES----')
for(let [ch,vl] of assuntosMap.entries()){
    console.log(ch, vl)
}

const s = new Set('a','b','c')
for (letra of s){
    console.log(letra)
}
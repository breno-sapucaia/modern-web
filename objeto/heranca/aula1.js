//Herança é basicamente um reuso de código sem ctrl+c e ctrl+v
//priorize composição -(objetos com objetos)-
//PROTOTYPE- ter uma referência como protótipo(outro obj), o pai do objeto em questão, e consequentemente. 
const ferrari = {
    modelo:'F40',
    velMAx: 324  
}
const volvo ={
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
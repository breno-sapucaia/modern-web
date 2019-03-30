const contadorA = require ('./instanciaUnica')
const contadorB = require ('./instanciaUnica')

const contadorC = require ('./instanciaNova')()
const contadorD = require ('./instanciaNova')()

contadorA.inc()
contadorB.inc()
console.log(contadorB.valor, contadorA.valor)

condadorC.inc()
condadorC.inc()
console.log(contadorD.valor, contadorC.valor)
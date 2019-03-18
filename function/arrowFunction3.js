let compararComThis = function (param) {
    console.log(this === param)
}

compararComThis(global)
const obj = {}
compararComThis = compararComThis.bind(obj)
compararComThis(global)
compararComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
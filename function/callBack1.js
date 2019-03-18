const fabricantes = ["mercedes","Audi","BMW"]

function imprimir(nome, indice) {
        console.log(`${indice + 1}. ${nome}`)
}
for(i in fabricantes){
    console.log(fabricantes[i])
}
fabricantes.forEach(imprimir)
fabricantes.forEach(function(a) {
    console.log(a)
})

fabricantes.forEach(fabricante => console.log(fabricante))
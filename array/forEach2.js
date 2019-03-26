Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.lenght; i++) {
        callback(this[i], i, this)
    }
}
const aprovados = ['Agatha','Aldo','Daniel','Raquel']

aprovados.forEach2(function(nome, indicie){
    console.log(`${indicie +1}) ${nome}`)
})
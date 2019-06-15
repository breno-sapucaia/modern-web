module.exports = (app, text) => {
    function salvar( req, res){
        res.send(` Produto > salvar > ${text} `)
    }

    function obter(req, res) {
        res.send('Produto > obter')
    }

    app.post('/produto', salvar)
    app.get('/produto', obter)

    return { salvar, obter }
}
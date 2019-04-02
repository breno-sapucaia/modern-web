const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: true }))


app.post('/usuarios',(req,res) => {
    console.log(req.body)
    res.send('<h1>Parabéns. Usuário Incluido!!!</h1>')
})

app.post('/usuarios/:id',(req,res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.send('<h1>Parabéns. Usuário alterado!!!</h1>')
})

app.listen(3003)
//usando promises
const http = require('http')

const getTurma = letrta => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letrta}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () =>{
                try{
                    resolve(JSON.parse(resultado))
                } catch(e){
                    reject(e)
                }
            })
        })
    })
}

// recurso ES8
// Objetivo é simplificar o uso de promises

let obterAlunos = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
} // retornar um objeto Async Function

obterAlunos()
    .then(alunos => alunos.map(alunos => alunos.nome))
    .then(nomes => console.log(nomes))
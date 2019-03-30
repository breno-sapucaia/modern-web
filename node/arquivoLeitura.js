const fs = require('fs')
const caminho = __dirname + '/arquivo.json'
//sincrono...
 
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)
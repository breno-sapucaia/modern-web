function tratarErroELancar(erro){
    //throw new Erro('...')
    //throw 10
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function ImprimirNomeGritado(obj){
    try{
    console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
    tratarErroELancar(e)
    } finally{
        console.log('final')
    }
}

const obj = { name: 'Roberto'}
ImprimirNomeGritado(obj)
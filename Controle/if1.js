function soBoaNoticia(nota){
    if(nota >= 7) {
        console.log(`Aprovado com ` .concat(nota))
    }
}
soBoaNoticia(8.5)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log(`É verdade....`.concat(valor))
    }
}
seForVerdadeEuFalo()
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo(' Mentira')
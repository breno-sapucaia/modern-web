const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //massa quebrou o carro
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift(pilotos)// removo o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona no primeiro luigar
console.log(pilotos)

//adiciona
pilotos.splice(2 , 0, 'Botas', 'Massa' )
console.log(pilotos)

//remove
pilotos.splice(3,1)//massa queboru o carrro dnv
console.log(pilotos)

const algunsPilotos1=  pilotos.slice(2) //novo array do indice 2 pra frente
console.log(algunsPilotos1)



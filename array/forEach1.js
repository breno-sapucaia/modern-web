const aprovados = ['Agatha','Aldo','Daniel','Raquel']

aprovados.forEach(function(nome, indicie){
    console.log(`${indicie +1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados)
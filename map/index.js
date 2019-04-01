const nomes = [ "Ramon", "Lucas", "Edi", "Vitor" ]

const reverseNomes = nomes.map((nome) => {
    return nome.split("").reverse().join("")
})



console.log(reverseNomes)
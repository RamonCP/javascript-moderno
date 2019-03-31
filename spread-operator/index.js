const person = [ "Scorpion", "Sonic", "Buzz", "Mário", "Link" ];
const newPerson = [ "Scarlet", ...person, "Kratos" ];

const $root = document.querySelector('#root');

// console.log(newPerson)

const soma = (num1, num2, num3) => {
    console.log(num1 + num2)
    console.log(`3º parametro ${num3}`)
}
// soma(5, 6)
const num = [ 5, 6, 4 ]
// soma(...num)

const soma2 = (...values) => {
    console.log(values)
    console.log(values[0])
    console.log(values[1])
    console.log(values[2])
}
// soma2(4, 5, 10, 2)


const recebeObjeto = (...values) => {
    // console.log(values)
    // console.log(values[0].nome)

    //Spread Operator com Object Destructuring
    const { nome, user } = values[0]

    // console.log(`Nome: ${nome}`)
    // console.log(`Username: ${user}`)

    values.forEach((item) => {
        console.log(item)
    })

}
recebeObjeto({ nome: 'Ramon', user: 'RamonCP' })

const ListComponent = (...items) => {
    const UlComponent = document.createElement('ul');
    const LiComponents = items.map( item =>  `<li>${item}</li>` )

    
    UlComponent.innerHTML = LiComponents.join(" ")
    return UlComponent;
}

const ListComponentReturn = ListComponent('Arroz', 'Feijão', 'Carne', 'Peixe', 'Macarrão', 'Salada de Maionese')
$root.insertBefore(ListComponentReturn, null);

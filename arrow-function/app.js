const App = document.querySelector('#app');
const input = document.querySelector('#app input');

const meuNome = (nome) => {
    console.log(`Olá ${nome}`);
}

const meuNome2 = nome => console.log(`Olá ${nome}`);

const pTexto = (textP) => {
    const paragraph = document.createElement('p');
    const text = document.createTextNode(textP);
    paragraph.appendChild(text);

    return paragraph; 
}

const button = (styles) => {
    const botao = document.createElement('button');
    botao.setAttribute('id', 'botao');
    botao.style = styles;

    const botaoText = document.createTextNode('Clique aqui');
    botao.appendChild(botaoText);

    return botao;
}


// meuNome2('Ramon')
const hello = pTexto('Olá Mundo');
App.insertBefore(hello, null);

const botao = button();
App.insertBefore(botao, null);


const botaoElement = document.querySelector('#app button')

botaoElement.addEventListener('click', () => {
    botaoElement.classList.toggle('active');
    console.log('Olá')
})
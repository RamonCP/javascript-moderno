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

// meuNome2('Ramon')
const hello = pTexto('Olá Mundo');
App.insertBefore(hello, null);


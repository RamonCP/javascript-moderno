const $root = document.querySelector('#root');

function h1(styles, ...values) {
    $elementH1 = document.createElement('h1');
    $elementH1.style = styles
    $elementH1.innerHTML = `${values[0]}<br>${values[1]}`;
    console.log(values);
    return $elementH1;  
}

$h1 = h1 `
    font-size: 40px;
    color: #ff000;
    text-align: center;
    ${'Criando texto com template string'}
    ${'Aprendendo JavaScript Moderno'}
`;

$root.insertBefore($h1, null)
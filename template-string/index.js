const $root = document.querySelector('#root');
const $wrap = document.createElement('div');
const qty = 15;
const $texto = `
    <p>Carrinho (${qty})</p>
`;

$wrap.innerHTML = $texto;
$root.insertBefore($wrap, null);
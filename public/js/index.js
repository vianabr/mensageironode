//indicando uma variável para o card onde será contido as frases
let frasetela = document.querySelector('.card-body');

//fornecendo a função de clicar no botão + chamar a lógica de recuperar as frases
let button = document.querySelector('.btn');

button.addEventListener('click', fraseAleatoria);

/*lógica de recuperação de frases aleatórias
**a variável aleatório entende quantas arrays existem
**a variável i, recebe um calculo aleatório feito pelo sistema
**a variável retorno recebe a frase escolhida pelo sistema
**a var retorno é usada no card, onde foi destinada à aparecer
.*/
function fraseAleatoria() {

    let aleatorio = frases.length
    let i = Math.round(Math.random()* aleatorio);
    let retorno = frases[i]
    frasetela.textContent = retorno;

};
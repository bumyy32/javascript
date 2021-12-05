var botao = document.querySelector('#btn-respota');

botao.addEventListener('click', function ir(numero1) {
    var numero1 = parseInt(document.querySelector('#numero1').value);


    if(numero1 >= 0){
        document.querySelector('#resultado').innerHTML = 'O resultado é positivo.'
    }
    else{
        document.querySelector('#resultado').innerHTML = 'O resultado é negativo.'
    }
});

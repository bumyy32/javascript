var botao  = document.querySelector('#btn-calcular');

botao.addEventListener("click", function imparpar (numero1) {
    var numero1 = parseInt(document.querySelector('#numero1').value);
    

    if(numero1 % 2 == 0) {
        document.querySelector('#resultado').innerHTML = 'O número é par.'
    }
    else{
        document.querySelector('#resultado').innerHTML = 'O número é impar.'
    }
})
document.querySelector('#btn-calcular').addEventListener('click',
function() {
    var numero = parseInt(document.querySelector('#txtTabuada').value);
    var tabuada = numero * 1;
    document.querySelector('#tabuada').innerHTML = "";
    for (var i = 1; i <= 10; i++){
        tabuada = numero * i;
        var result = document.createElement('p');
        result.innerHTML = numero + ' * ' + i + ' = ' + tabuada;
        // result.style = 'margin 0'; - css dentro do js para tirar margin
        // result.classList.add('m-0'); - usando bs dentro do js para tirar margin
        document.querySelector('#tabuada').appendChild(result);
    }
})
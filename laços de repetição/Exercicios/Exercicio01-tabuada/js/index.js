document.querySelector('#btn-calcular').addEventListener('click',
function() {
    var numero = parseInt(document.querySelector('#txtTabuada').value);
    var tabuada = numero * 1;
    document.querySelector('#tabuada').innerHTML = "";
    for (var i = 1; i <= 10; i++){
        tabuada = numero * i;
        var result = document.createElement('p');
        result.innerHTML = numero + ' * ' + i + ' = ' + tabuada;
        document.querySelector('#tabuada').appendChild(result);
    }
})
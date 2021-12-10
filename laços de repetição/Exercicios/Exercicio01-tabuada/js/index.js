document.querySelector('#btn-calcular').addEventListener('click',
function() {
    var numero = parseInt(document.querySelector('#txtTabuada').value);
    var tabuada = numero * 1;
    for (var i = 1; i <= 10; i++){
        tabuada = numero * i;
        var result = document.createElement('p');
        result.innerHTML = tabuada;
        document.querySelector('#tabuada').appendChild(result);
    }
})
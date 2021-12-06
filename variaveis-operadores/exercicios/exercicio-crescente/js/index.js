var botao = document.querySelector('#btn-calcular');

botao.addEventListener('click', function (numero1, numero2, numero3) {
    var numero1 = document.querySelector('#numero1').value;
    var numero2 = document.querySelector('#numero2').value;
    var numero3 = document.querySelector('#numero3').value;

    if (numero1 > numero2 && numero1 > numero3) {
        if (numero2 > numero3) {
            alert(numero3 + ' ' + numero2 + ' ' + numero1);
        }
        else {
            alert(numero2 + ' ' + numero3 + ' ' +numero1);
        }
    }
        else if (numero2 > numero1 && numero2 > numero3) {
            if (numero1 > numero3) {
                alert(numero3 + ' ' + numero1 + ' ' + numero2);
            }
            else{
                alert(numero1 + ' ' + numero3 + ' ' + numero2);
            }
        }
        else if (numero3 > numero1 && numero3 > numero2) {
            if (numero1>numero2) {
                alert(numero2 + ' ' + numero1 + ' ' + numero3);
            }
            else{
                alert(numero1 + ' ' + numero2 + ' ' + numero3);
            }
        }
})
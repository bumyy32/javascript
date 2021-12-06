botao = document.querySelector('#btn');

botao.addEventListener('click', function (salario) {
    var salario = parseInt(document.querySelector('#txtreajuste').value);
    var salarioreajustado = 0;

    if (salario < 500) {
        // salarioreajustado = (salario * 0.15) + salario;
        salarioreajustado = salario * 1.15;
    }
    else if (salario > 1000) {
        salarioreajustado = salario * 1.05;
    }
    else{
        salarioreajustado = salario * 1.10;
}})
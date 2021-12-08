document.querySelector('#btn-calcular').addEventListener("click", function(){
    let nome = document.querySelector('#txtNome').value;
    let valorH = document.querySelector('#txtValor').value;
    let tHoras = document.querySelector('#txtTrabalhadas').value;
    let menu = document.querySelector('#txtMenu').value;
    var vTrasporte = 0;
    var iRenda = 0;
    var sBruto = valorH * tHoras;
    var pagamento = ('O salario bruto de ' + nome + ' é ' + sBruto);

    if (sBruto > 1440.00){
        iRenda = sBruto * 0.11;
    }
    else{
        alert('Não Possui Imposto De Renda')
    }

    switch(menu) {
        case 'sim':
            vTrasporte = sBruto * 0,06;
            var pagamento = ('O valor de desconto de vale transporte é ' + vTrasporte);
        break;
    }

    var sLiquido = sBruto - vTrasporte - iRenda;
    var pagamento = ('O Salario liquido é ' + sLiquido)

    document.querySelector('#resultado').innerHTML = `<div class="alert alert-success" role="alert">
    <h4 class="alert-heading">resultado</h4>
    <p>Resultado: ${pagamento}</p>
</div>`;
});
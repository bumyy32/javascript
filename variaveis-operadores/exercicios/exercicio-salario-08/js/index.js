var botao = document.querySelector("btn-calcular")

botao.addEventListener('click', function(){
    var nome = document.querySelector("#txtNome").value;
    var valorhora = parseFloat(document.querySelector('#txtvalorhora').value);
    var quanthoras = parseFloat(document.querySelector('#txtquanthoras').value);
    var valetransporte = parseFloat(document.querySelector('txtvaletransporte').value)

    var salariobruto = valorhora * quanthoras;
    var valorVt = 0;
    var valorIR = 0;

    switch(valetransporte) {
        case "sim":
            valorVt = salariobruto * 0.06;
            break;
    }

    if (salarioBruto > 1400) {
        valorIR = salariobruto * 0.11;
    }
})
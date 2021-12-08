var botao = document.querySelector("#btn-calcular")

botao.addEventListener("click", function(){
    var nome = document.querySelector("#txtNome").value;
    var valorhora = parseFloat(document.querySelector('#txtvalorhora').value);
    var quanthoras = parseFloat(document.querySelector('#txtquanthoras').value);
    var valetransporte = document.querySelector('#valetransporte').value;

    var salariobruto = valorhora * quanthoras;
    var valorVt = 0;
    var valorIR = 0;

    switch(valetransporte) {
        case "sim":
            valorVt = salariobruto * 0.06;
            break;
    }

    if (salariobruto > 1400) {
        valorIR = salariobruto * 0.11;
    }

    var salarioliquido = salariobruto - valorVt - valorIR;

    document.querySelector('#nome').innerHTML = nome;
    document.querySelector("#salariobruto").innerHTML = "Salário Bruto: " + salariobruto;
    document.querySelector("#valetransporte").innerHTML = "Valor do vale transporte: " + valorVt;
    document.querySelector("#imposto").innerHTML = "Valor do imposto de renda: " + valorIR;
    document.querySelector("#salarioliquido").innerHTML = "Salário líquido: " + salarioliquido;
})
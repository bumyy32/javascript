//Função
// function calc(numero1,numero2, operador){
//      return eval(`${numero1} ${operador} ${numero2}`);
// }

// // teste
// // let resultado = calc(10, 10, "+")

// // alert(resultado)

// função anonima
// let resultado = (function(numero1, numero2, operador){
//     return eval(`${numero1} ${operador} ${numero2}`);

// })(7, 10, '+');

// alert(resultado);

// Arrow function 
 let calculo = (numero1, numero2, operador) => {
      return eval(`${numero1} ${operador} ${numero2}`);
}

// let resultado = calculo(7,10 ,'-');

// alert(resultado);

var botao = document.querySelector('#btn-calcular');
    botao.addEventListener("click", () => {
        var numero1 = document.querySelector('#numero1').value;
        var numero2 = document.querySelector('#numero2').value;
        var operador = document.querySelector('#operador').value;

        let resultado = calculo(numero1, numero2, operador);
        alert(resultado);
    });

    // Estrutura condicional 
    if (numero > 5) {
        alert('Número é maior que 5');
    }
    else if (numero == 5) {
        alert('Número é igual a 5')
    }
        else{
            alert('Número não é maior que 5');
        }

        
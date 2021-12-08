var botao = document.querySelector('#btn-mostrar');

botao.addEventListener("click", function(){

    var a = document.querySelector('#Num1').value;
    var b = document.querySelector('#Num2').value;
    var c = document.querySelector('#Num3').value;

    var soma = a + b;
    var soma2 = b + c;
    var soma3 = c + a;

    if (soma > c || soma2 > a || soma3 > b){
        
        if (a == b && b == c && c == a){
           var resultado = ('Equilatero') 
        }

        else if (a != b && b != c && c!= a){
            var resultado = ('Escaleno') 
        }
        else{
            var resultado = ('Isóceles') 
        }
    }
    
    document.querySelector('#resultado').innerHTML = `<div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Triangulo</h4>
    <p>Resultado: ${resultado}</p>
</div>`;
});
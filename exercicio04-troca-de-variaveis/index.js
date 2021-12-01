var botao = document.querySelector('#calcular') 

botao.addEventListener("click",function(){
    var n1 = parseInt(document.querySelector('#numero1').value);
    var n2 = parseInt(document.querySelector('#numero2').value);


    document.querySelector('#numero11').innerHTML = `<div class="alert alert-dark" role="alert">
    <p> Primeiro número: ${n2} </p>
    <p> Segundo número: ${n1} </p>
    </div>`;


});
var botao = document.querySelector('#calcular') 

botao.addEventListener("click",function(){
    var area = parseInt(document.querySelector('#area').value);

    var areatotal = area * 4

    document.querySelector('#resultado').innerHTML = `<div class="alert alert-dark" role="alert">
    <p>A área total do quadrado é de: ${areatotal}</p>
    </div>`;

});
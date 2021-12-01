var botao = document.querySelector('#calcular') 

botao.addEventListener("click",function(){
    var comprimento = parseInt(document.querySelector('#comprimento').value);
    var altura = parseInt(document.querySelector('#altura').value);
    var largura = parseInt(document.querySelector('#largura').value);

    var volume = comprimento * altura * largura 

    document.querySelector('#resultado').innerHTML =`<div class="alert alert-dark" role="alert">
    <p>O volume da caixa retangular é de: ${volume}</p>
    </div>`;
    

});
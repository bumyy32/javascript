var botao = document.querySelector('#calcular') 

botao.addEventListener("click",function(){
    var nome = document.querySelector('#txtNome').value;
    var nota1 = parseInt(document.querySelector('#txtNota01').value);
    var nota2 = parseInt(document.querySelector('#txtNota02').value);

    var media = (nota1 + nota2) / 2;


    document.querySelector('#resultadomedia').innerHTML =`<div class="alert alert-dark" role="alert">
    <p>Nome do aluno: ${nome} e sua média geral foi de: ${media}</p>
    </div>`;

});
var botao = document.querySelector('#calcular') 

botao.addEventListener("click",function(){
    var nome = document.querySelector('#txtNome').value;
    var nota1 = parseInt(document.querySelector('#txtNota01').value);
    var nota2 = parseInt(document.querySelector('#txtNota02').value);

    var media = (nota1 + nota2) / 2;

    document.querySelector('#result-nome').innerHTML = nome;
    document.querySelector('#resultado').innerHTML = media;
    document.querySelector('#resultadomedia').innerHTML = "Nome do aluno: " + nome + " Média geral: " + media;
});
var botao = document.querySelector('#btn-calcular');

botao.addEventListener('click', function media1(aluno, nota1, nota2) {
    var aluno = document.querySelector('#aluno').value;
    var nota1 = parseInt(document.querySelector('#nota1').value);
    var nota2 = parseInt(document.querySelector('#nota2').value);
    
    var media = nota1 + nota2;

    if (media >= 6) {
        document.querySelector('#resultado').innerHTML = 'O aluno: ' + aluno + ' foi aprovado com uma média nota: ' + media
    }
    else{
        document.querySelector('#resultado').innerHTML = 'O aluno ' + aluno + ' foi reprovado com uma média nota: ' + media
    }
})
// Declaração de variaveis
// let - Variavel LOCAL
let nome = 'Bummy';

 // mostra a minha variavel nome em um alerta
alert('Nome:' + nome);

// var - variavel global
var idade = 19;

alert(idade);

let nome = 'Bummy';
var idade = 19;
alert('Nome:' + ' ' + nome + ' ' + '\nIdade: ' + ' ' + idade);

// Fazer a soma de dois números

var numero01, numero02, resultado;
numero01 = 2254;
numero02 = 1143;

resultado = numero01 + numero02;

alert('Resultado: ' + resultado);
alert(numero01 + numero02 + resultado);

// Fazer a subtração

var numero01, numero02, resultado;
numero01 = 2254;
numero02 = 1143;

resultado = numero01 - numero02;

alert('Resultado: ' + resultado);

// multiplicação

var numero01, numero02, resultado;
numero01 = 2254;
numero02 = 1143;

resultado = numero01 * numero02;

alert('Resultado: ' + resultado);

// pegar data 
Date();

// teste com numero
var teste = 10;

teste.toExponential(); // mostra as anotações em exponencial
teste.toFixed(2); // bota 0 apos a virgula
teste.toPrecision(1); // arredonda o valor
teste.toString(); // Converte para string, usado para ocasiões específicas

// Teste string 

var teste = 'javascript';

teste.CharAt(4); // pega o caracter que está no lugar indicado, começando a contagem do 0, ou seja, nesse caso seria a letra S
teste.concat(' é legal') // essa função concatena, junta, duas strings
teste.split(a); // nesse caso, ele irá retirar toda letra A da palavra javascript, ou qualquer outra que seja selecionada
teste.split(' ') // separa cada uma das palavras caso a variavel tiver mais de uma

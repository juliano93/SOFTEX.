// CURSO 02 - JAVASCRIPT
// DESENVOLVIMENTO 6

// Crie dois códigos de sistema de notas para uma escola. O primeiro código
// deve ser um programa que informa se o aluno reprovou, ou não, com base nas três notas
// que ele adicionou ao programa. Utilize, no mínimo, um operador de atribuição
// e um operador ternário. O segundo código é um programa que o aluno deve escrever
// duas notas e o retorno informa a nota mínima que ele deve tirar na
// próxima prova para poder passar com nota sete.

// CÓDIGO 1 - reprovou ou não?

const receber = require('prompt-sync')({sigint: true});

let n1, n2, n3, media;

n1 = receber("Informe a primeira nota do aluno:");
n2 = receber("Informe a segunda nota do aluno:");
n3 = receber("Informe a terceira nota do aluno:");

n1 = parseFloat(n1);
n2 = parseFloat(n2);
n3 = parseFloat(n3);

media = (n1 + n2 + n3)/3;

console.log("A média do aluno foi: ", media)
console.log( (media >=7 ? "O aluno está aprovado! Parabéns pelo empenho!" : "O aluno está reprovado :("))

// CÓDIGO 2 - nota mínima para aprovação

const receber2 = require('prompt-sync')({sigint: true});

let nota1, nota2, notaMIN, mediaMIN;

nota1 = receber("Informe a primeira nota do aluno:");
nota2 = receber("Informe a primeira nota do aluno:");

nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);

notaMIN = 21 - n1 - n2;

console.log("A nota mínima que o aluno precisa tirar para a aprovação é", notaMIN)

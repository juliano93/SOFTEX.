// CURSO 02 - JAVASCRIPT
// DESENVOLVIMENTO 5

// Com os conceitos aprendidos, crie um programa de calculadora que: 

// receba dois valores, que devem ser salvos em variáveis; 
// o usuário deve colocar qual operador ele vai utilizar por meio dos símbolos aritméticos; 
// com os dois valores e o operador definido, o programa deve fazer a operação e retornar o resultado; 
// se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma. 

// SOLUÇÃO 1 - USANDO CONDICIONAL "IF" e usando o PROMPT

const receber = require('prompt-sync')({sigint: true});

let n1, n2, oper;

n1 = receber("Insira o primeiro operando:");
n2 = receber("Insira o segundo operando:");

// convertendo em números
n1 = parseFloat(n1);
n2 = parseFloat(n2);


console.log("Qual operação você deseja fazer? Use o símbolo aritmético adequado:")
console.log("'+' para somar, '-' para subtrair, '*' para multiplicar e '/' para dividir.")

oper = receber("Digite o operando:");

if (oper == "+") {
    res = n1+n2
    console.log(res)
}

if (oper == "-") {
    res = n1-n2
    console.log(res)
}

if (oper == "*") {
    res = n1*n2
    console.log(res)
}

if (oper == "/") {
    res = n1/n2
    sobra = n1%n2
    console.log("O resultado da divisão foi :",res)
    console.log("A sobra da divisão foi :",sobra)
}

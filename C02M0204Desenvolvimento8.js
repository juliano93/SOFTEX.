// Crie um programa que contenha os seguintes tipos de funções:

// 1. uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro;
// 2. uma função tradicional com parâmetros e um retorno de valor;
// 3. uma arrow function com parâmetros e que retorne um valor.

// Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora.

// 1o FUNCAO (tradicional com palavra function e sem parametros):

function boas_vindas () {
    console.log("Olá, usuário! Seja bem-vindo ao meu programa de calculadora!")
}
boas_vindas()

// 2a FUNCAO(tradicional com parametros e valor retornado):

function somar(num1,num2) {
    result_soma = num1 + num2
    console.log("O resultado da soma entre os números é",result_soma)
}

somar(5,3)

// 3a FUNCAO (funcao arrow com parametros e retorno):

var subtrair = (n1,n2) => console.log("O resultado da subtração entre os números é " + String(n1-n2))

subtrair(5,2)

// FUNCAO CALCULADORA COMPLETA (TAL COMO NO SLIDE, PARA GRAVAR A SINTAXE)

const calculadora = (operador, [numero1,numero2]=[15,6]) => "O resultado da operação é: " + eval(`${numero1} ${operador} ${numero2}`);

calculadora ('-')
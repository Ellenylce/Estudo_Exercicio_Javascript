// 1.Crie uma variável, inicialize e exiba seu valor no console.

console.log("1.Crie uma variável, inicialize e exiba seu valor no console.")
var var_inicializada= 100;
console.log(var_inicializada)
console.log("\n");

// 2.Crie um array de itens, itere sobre eles e os exiba no console.
console.log("2.Crie um array de itens, itere sobre eles e os exiba no console")
                // Criando um array de itens
let frutas_favoritas=['Laranja', 'Manga', 'Goiaba', 'Abacaxi', 'Morango']
                // Iterando sobre o array de itens e exibindo cada item no console
for(let i = 0; i < frutas_favoritas.length; i++ ){
    console.log(frutas_favoritas[i])
}
console.log("\n");

// 3.Acessar o terceiro elemento da lista ['maça', 'Banana', 'Laranja', 'Uva']
console.log("3.Acessar o terceiro elemento da lista ['maça', 'Banana', 'Laranja', 'Uva']")
var frutas = ['maça', 'Banana', 'Laranja', 'Uva']
console.log(frutas[3])
console.log("\n");
// 4. Crie uma função que calcule a área do quadrado em metros. Quadrado é a figura que tem todos os lados iguais.
// a. formula: lado x lado ou lado2
// b. exemplo de saída esperada:
// i. A área de um quadrado de lado 2 é 4m2

console.log("4.calcular a área do quadrado em metros")
// Função para calcular a área do quadrado
function calcularAreaQuadrado(lado) {
    return lado * lado;
}
// Utilizando a função
let lado = 2;
let area = calcularAreaQuadrado(lado);
console.log(`A área de um quadrado de lado ${lado} é ${area}m²`);
console.log("\n");

// 5.5. Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na tela a soma entre A e B e mostre se a soma é menor que C.

console.log("5. Soma de A e B é menor que C?");
// Lê os valores de A, B e C da tela
// let A = parseInt(prompt("Digite o valor de A:"));
// let B = parseInt(prompt("Digite o valor de B:"));
// let C = parseInt(prompt("Digite o valor de C"));

// // Calcula a soma de A e B e exibe na tela
// let somaAB = A + B;
// console.log(`A soma de A e B é: ${somaAB}`);
// // // Verifica se a soma é menor que C e exibe a mensagem n atela
// if(somaAB < C){
//     console.log(`A soma de A e B é menor que C`);
// }else{
//     console.log(`A soma de A e B não é menor que C`);
// }
console.log("\n");

//6. Qual a saída desse código?
console.log("6. Qual a saida do código:var string recebe 5 e concatena com 10");
var numero = "5";
var soma = numero + 10;
console.log(soma);
console.log("\n");

//7. Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B forem iguais, deverá somar os dois valores, caso contrário deverá multiplicar A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado a uma variável C e imprimir seu valor na tela.
console.log("7.se os valores de A e B forem iguais, deverá somar os dois valores, caso contrário deverá multiplicar A por B");

// // leitura valor A e B
// var A = parseInt(prompt("Digite um valor inteiro A:"));
// var B = parseInt(prompt("Digite um valor inteiro B:"));
// // Verifica se os valores são iguais ou não
// if(A === B){
//     var C = A + B;
//     console.log(C);
// }else{
//     var C = A * B;
//     console.log(C);
// }
console.log("\n");

// 8. O que acontece na execução do código a seguir? E se trocar a declaração da variável por let?

console.log("8. O que acontece na execução do código a seguir? E se trocar a declaração da variável por let?");
console.log("Resposta: neste caso obterá um erro ReferenceError: contador is not defined, pois let é limitada ao bloco onde foi definida: um bloco é delimitado por {}");
// for(let contador = 0; contador < 5; contador++){
// }
// console.log(contador);
console.log("\n");

// 9. Faça um algoritmo que receba um número inteiro e imprima na tela o seu antecessor e o seu sucessor.
console.log(" 9. Faça um algoritmo que receba um número inteiro e imprima na tela o seu antecessor e o seu sucessor.");
// // Solicita ao usuário que insira um número inteiro
// var numero = parseInt(prompt("Digite um número:"));
// // Calcula o antecessor e o sucessor
// var antecessor= numero - 1;
// var sucessor = numero + 1;
// // Imprime o antecessor e o sucessor na tela
// console.log("Número digitado:" + numero);
// console.log("Antecessor: " + antecessor);
// console.log("Sucessor: " + sucessor);
console.log("\n");

// 10.Qual será a saída do seguinte código? Escreva e execute.
console.log("10.Qual será a saída do seguinte código? Escreva e execute.");
var x = 10;
function minhaFuncao (){
    var y = 5;
    console.log(x + y);
}
minhaFuncao();
console.log("\n");

// 11. Qual será a saída do seguinte código? Escreva e execute.
console.log("11. Qual será a saída do seguinte código? Escreva e execute.");
var numero = "5";
if(numero===5){
    console.log("O número é igual a 5");
}else if (numero == 5){
    console.log("O número é igual a 5, com conversão de tipo");
}else{
    console.log("O número não é igual a 5");
}
console.log("\n");

// 12.Crie um programa que receba o seguinte array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], e imprime um novo array apenas com os números pares. Dicas:a. ler array pode ser feito de forma fácil com forEach, mas isso pode ser feito com for também. b. exemplo de saída esperada: i. [2, 4, 6, 8, 10]
console.log("12.Crie um programa que receba o seguinte array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], e imprime um novo array apenas com os números pares.");
// Array inicial
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Array para armazenar os números pares
let pares = [];

// Usando for para iterar pelo array e encontrar os números pares
// push em JavaScript é usado para adicionar um ou mais elementos ao final de um array. 
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
    }
}
// Imprimindo o array de números pares
console.log(pares);

// 13.Crie um programa que:
// a. Tenha uma função que recebe 3 parâmetros (notas) e retorne a média;
// b. Avalie a média recebida e exibe a média junto com a situação no console de acordo com as regras abaixo:
// i. 7 ou maior = aprovado;
// ii. 5 a 7 = recuperação;
// iii. menor que 5 = reprovado.
// c. exemplo de saída esperada:
// i. “Média 8.5, resultado: Aprovado”.
console.log("13.Crie um programa que:Tenha uma função que recebe 3 parâmetros (notas) e retorne a média;");
// Função para calcular a média de três notas
function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

// Função para avaliar a média e exibir a situação
function avaliarMedia(media) {
    let situacao;

    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 5 && media < 7) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }
    console.log("Media: " + media,"\nResultado: "+ situacao );
}
// Exemplo das notas
let nota1 = 8;
let nota2 = 7;
let nota3 = 9;
let media = calcularMedia(nota1, nota2, nota3);
avaliarMedia(media);

// 14.Crie um programa que calcule o IMC e exiba na tela junto com a situação. O Índice de Massa Corpórea (IMC) é um valor calculado baseado na altura e no peso de uma pessoa. De acordo com o valor do IMC, podemos classificar o indivíduo dentro de certas faixas. O IMC é calculado pela expressão peso/altura2 (peso dividido pelo quadrado da altura)
// a. abaixo de 18.5: Abaixo do peso
// b. entre 18.5 e 25: Peso ideal
// c. entre 25 e 30: Sobrepeso
// d. entre 30 e 40: Obesidade
// e. acima de 40: Obesidade mórbida
// f. exemplo de saída esperada:
// i. “Seu IMC é 23, resultado: Peso Ideal”
console.log("14.Crie um programa que calcule o IMC e exiba na tela junto com a situação.")
// Função para calcular o IMC
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// Função para avaliar o IMC e exibir a situação
function avaliarIMC(imc) {
    let situacao;

    if (imc < 18.5) {
        situacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        situacao = "Peso ideal";
    } else if (imc >= 25 && imc < 30) {
        situacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 40) {
        situacao = "Obesidade";
    } else {
        situacao = "Obesidade mórbida";
    }
   
    console.log("Seu IMC é: " + imc.toFixed(1), "\nResultado: " + situacao);
    // garante que o valor do IMC exibido será formatado com uma única casa decimal.
}

// Exemplo de peso
let peso = 70;   // Peso em kg
let altura = 1.75; // Altura em metros
let imc = calcularIMC(peso, altura);
avaliarIMC(imc);

// 15.Escreva um programa que leia um número qualquer e mostre a tabuada desse número, usando a estrutura “for”.
// a. exemplo de saída para a entrada de número 8:
// i. 8 x 1 = 8
// ii. 8 x 2 = 16
// iii. 8 x 3 = 24
// iv. ...
// v. 8 x 10 = 80
console.log("Escreva um programa que leia um número qualquer e mostre a tabuada desse número, usando a estrutura “for”.");
// Ler o numero qualquer do usuario
let numeroTabuada = parseInt(prompt("Digite um número:"));

// Loop para calcular e exibir a tabuada de 1 a 10
for (let i = 1; i <= 10; i++) {
    let resultado = numeroTabuada * i;
    console.log(numeroTabuada + " x "+ i + " = " + resultado);
}
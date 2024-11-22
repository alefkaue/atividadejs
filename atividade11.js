// Exercício 1: Exibição de Lista de Alunos
const alunosLista = ['Ana', 'Carlos', 'João', 'Beatriz', 'Lucas'];

for (let i = 0; i < alunosLista.length; i++) {
    console.log(alunosLista[i]);
}

// Exercício 2: Tabuada de Multiplicação
const numeroTabuada = 8;

for (let i = 0; i <= 10; i++) {
    console.log(numeroTabuada + " x " + i + " = " + (numeroTabuada * i));
}

// Exercício 3: Calculadora de Média de Notas
const prompt1 = require('prompt-sync')();
let notasAluno = [];

for (let i = 0; i < 5; i++) {
    let nota = parseFloat(prompt1(`Digite a nota ${i + 1}: `));
    notasAluno.push(nota);
}

let somaNotas = notasAluno.reduce((a, b) => a + b, 0);
let mediaNotas = somaNotas / notasAluno.length;
console.log(`A média das notas é: ${mediaNotas.toFixed(2)}`);

// Exercício 4: Sistema de Contagem Regressiva
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Exercício 5: Verificação de Número Par
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Exercício 6: Lista de Materiais
let materiaisEscolares = ["caneta", "lápis", "borracha", "mochila", "caderno", "tesoura"];

for (let i = 0; i < materiaisEscolares.length; i++) {
    console.log(materiaisEscolares[i]);
}

// Exercício 7: Soma dos Números de 1 a N
const prompt2 = require('prompt-sync')();
let numeroLimite = parseFloat(prompt2("Digite um número: "));
let somaTotal = 0;

for (let i = 1; i <= numeroLimite; i++) {
    somaTotal += i;
}
console.log(`A soma dos números de 1 até ${numeroLimite} é: ${somaTotal}`);

// Exercício 8: Fatorial de um Número
const prompt3 = require('prompt-sync')();
let fatorial = 1;
let numeroFatorial = parseInt(prompt3('Digite um número para calcular o fatorial: '));

for (let i = 1; i <= numeroFatorial; i++) {
    fatorial *= i;
}

console.log(`O fatorial de ${numeroFatorial} é: ${fatorial}`);

// Exercício 9: Contagem de Vogais em uma Palavra
const prompt4 = require('prompt-sync')();
let palavraDigitada = prompt4("Digite uma palavra: ");
let vogais = "aeiou";

for (let i = 0; i < palavraDigitada.length; i++) {
    if (vogais.includes(palavraDigitada[i].toLowerCase())) {
        console.log(`A palavra "${palavraDigitada}" tem a vogal: ${palavraDigitada[i]}`);
    }
}

// Exercício 10: Multiplicação de Array
const prompt5 = require('prompt-sync')();
let numerosArray = [];

for (let i = 0; i < 5; i++) {
    numerosArray.push(parseInt(prompt5(`Digite o ${i + 1}º número: `)));
}

for (let i = 0; i < numerosArray.length; i++) {
    console.log(`${numerosArray[i]} x 2 = ${numerosArray[i] * 2}`);
}

// Exercício 11: Inversão de String
const prompt6 = require('prompt-sync')();
let palavraInput = prompt6('Digite uma palavra: ');
let palavraInvertida = '';

for (let i = palavraInput.length - 1; i >= 0; i--) {
    palavraInvertida += palavraInput[i];
}

console.log(`A palavra invertida é: ${palavraInvertida}`);

// Exercício 12: Soma de Números Pares em um Intervalo
const prompt7 = require('prompt-sync')();
let numeroInicio = parseInt(prompt7('Digite o primeiro número do intervalo: '));
let numeroFim = parseInt(prompt7('Digite o segundo número do intervalo: '));
let somaPares = 0;

for (let i = numeroInicio; i <= numeroFim; i++) {
    if (i % 2 === 0) {
        somaPares += i;
    }
}

console.log(`A soma dos números pares no intervalo de ${numeroInicio} a ${numeroFim} é: ${somaPares}`);

// Exercício 13: Contagem de Caracteres em uma Frase
const prompt8 = require('prompt-sync')();
let fraseDigitada = prompt8('Digite uma frase: ');
let contadorCaracteres = 0;

for (let i = 0; i < fraseDigitada.length; i++) {
    if (fraseDigitada[i] !== ' ') {
        contadorCaracteres++;
    }
}

console.log(`A frase tem ${contadorCaracteres} caracteres (sem contar os espaços).`);

// Exercício 14: Lista de Meses do Ano
let mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

for (let i = 0; i < mesesDoAno.length; i++) {
    console.log(mesesDoAno[i]);
}

// Exercício 15: Cálculo de Potências
const prompt9 = require('prompt-sync')();
let numeroBase = parseInt(prompt9('Digite um número: '));

for (let i = 1; i <= 5; i++) {
    console.log(`${numeroBase} elevado à ${i}ª potência é: ${Math.pow(numeroBase, i)}`);
}

// Exercício 16: Criação de um Array de Quadrados
const prompt10 = require('prompt-sync')();
let numeroLimiteQuadrados = parseInt(prompt10('Digite um número: '));
let quadradosArray = [];

for (let i = 1; i <= numeroLimiteQuadrados; i++) {
    quadradosArray.push(i * i);
}

console.log(`Os quadrados dos números de 1 até ${numeroLimiteQuadrados} são: ${quadradosArray}`);

// Exercício 17: Impressão de Padrão de Asteriscos
const linhasAsteriscos = 5; // Número de linhas do triângulo
for (let i = 1; i <= linhasAsteriscos; i++) {
    let asteriscos = '';
    for (let j = 1; j <= i; j++) {
        asteriscos += '*';
    }
    console.log(asteriscos);
}

// Exercício 18: Calculadora de Média Ponderada
const prompt11 = require('prompt-sync')();
let notasPonderadas = [];
let pesosNotas = [];
let somaNotasPonderadas = 0;
let somaPesos = 0;

for (let i = 1; i <= 3; i++) {
    let nota = parseFloat(prompt11(`Digite a nota ${i}: `));
    let peso = parseFloat(prompt11(`Digite o peso da nota ${i}: `));
    notasPonderadas.push(nota);
    pesosNotas.push(peso);
    somaNotasPonderadas += nota * peso;
    somaPesos += peso;
}

let mediaPonderada = somaNotasPonderadas / somaPesos;
console.log(`A média ponderada das notas é: ${mediaPonderada.toFixed(2)}`);

// Exercício 19: Contagem de Divisores
const prompt12 = require('prompt-sync')();
let numeroDivisores = parseInt(prompt12('Digite um número para contar seus divisores: '));
let contadorDivisores = 0;

for (let i = 1; i <= numeroDivisores; i++) {
    if (numeroDivisores % i === 0) {
        contadorDivisores++;
    }
}

console.log(`O número ${numeroDivisores} tem ${contadorDivisores} divisores.`);

// Exercício 20: Simulação de Um Sorteio
const prompt13 = require('prompt-sync')();
let participantesLista = [];
let continuarParticipantes = 's';

while (continuarParticipantes === 's') {
    let nome = prompt13('Digite o nome de um participante: ');
    participantesLista.push(nome);
    continuarParticipantes = prompt13('Deseja adicionar outro participante? (s/n): ').toLowerCase();
}

let vencedorSorteio = participantesLista[Math.floor(Math.random() * participantesLista.length)];

console.log(`Os participantes são: ${participantesLista.join(', ')}`);
console.log(`O vencedor do sorteio é: ${vencedorSorteio}`);

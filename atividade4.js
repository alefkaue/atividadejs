//----------NIVEL FACIL----------

let nuemro = 278;
if (nuemro % 2 === 0) {
    console.log("O número é par.")
} else {
    console.log("O número é ímpar.");
}

//-------------------

let anoNascimento = 2004;
let anoAtual = new Date().getFullYear();
const idadeCalculada = anoAtual - anoNascimento;
if (idadeCalculada < 18) {
    console.log("Você é menor de idade.");
} else {
    console.log("Você é maior de idade.")
}

//-------------------

let nota1 = 9.9;
let nota2 = 9.5;
let nota3 = 8.4;
const media = (nota1 + nota2 + nota3)/3;
console.log(media >= 7 ? "Aprovado" : "Reprovado");

//-------------------
 
let idadeVotante = 10;
if (idadeVotante >= 16){
    console.log("Você pode votar.")
} else {
    console.log("Você não pode votar.");
}

//-------------------

let a = 89;
let b = 64;
let maior = a > b ? a : b;
console.log("O maior número é " + maior);

//-------------------

let horasTrabalho = 44;
let horasMinimas = 40;
if (horasTrabalho < horasMinimas) {
    console.log("Você trabalho menos que o mínimo necessário.");
} else if (horasTrabalho > horasMinimas) {
    console.log("Você fez hora extra.");
} else {
    console.log("Você trabalho o mínimo necessário."); 
}

//-------------------

let numero = 15;
if (numero >= 10 && numero <= 50) {
    console.log("O número está dentro do intervalo.");
} else {
    console.log("O número está fora do intervalo.");
}

//-------------------

let letra = 'a';
if ('aeiouAEIOU'.includes(letra)) {
    console.log("É uma vogal");
} else {
    console.log("É uma consoante.");
}

//-------------------

let mes = "fevereiro";
if (mes === 'dezembro' || mes === 'janeiro' || mes === 'julho') {
    console.log("Mês de férias.");
} else {
    console.log("Mês comum.");
}

//-------------------

let nota = 59;
if (nota >= 90) {
    console.log("Nota A.")
} else if (nota >=80) {
    console.log("Nota B.")
} else if (nota >=70) {
    console.log("Nota C.")
} else if (nota >=60) {
    console.log("Nota D.")
} else {
    console.log("Nota F.")
}

//----------NIVEL MEDIO----------

let c = 10;
let d = 20;
let e = 5; 
if (c > d && c > e) {
    console.log("O maior número é " + c);
} else if (d > c && d > e) {
    console.log("O maior número é " + d);
} else {
    console.log("O maior número é " + e);
}

//-------------------

let texto = "Olá";
let primeiraLetra = texto[0]
if (primeiraLetra >= 'A' && primeiraLetra <= 'Z') {
    console.log("A primeira é maiúscula.");    
} else {
    console.log("A primeira é minúscula.");
}

//-------------------

let temperatura = 17;
if (temperatura < 15) {
    console.log("Frio.");
} else if (temperatura >= 15 && temperatura <= 30) {
    console.log("Moderado.");
} else {
    console.log("Quente");
}

//-------------------

let anoAtual1 = new Date().getFullYear;
let anoBissexto = (anoAtual1 % 4 === 0 && anoAtual % 100 !== 0) || (anoAtual1 % 400 === 0);
console.log(anoBissexto ? "O ano é bissexto." : "O ano não é bissexto.");

//-------------------

let num1 = 10;
let num2 = 25;
if (num1 % 5 === 0 && num2 % 5 === 0) {
    console.log("Ambos são divisíveis por 5");
} else {
    console.log("Um ou ambos não são divisíveis por 5.");
}

//-------------------

let corSemaforo = "vermleho"
if (corSemaforo === 'verde') {
    console.log("Siga");
} else if (corSemaforo === 'amarelo') {
    console.log("Aguarde")
} else if (corSemaforo === 'vermelho') {
    console.log("Pare");
} else {
    console.log("Quebrado")
}

//-------------------

let     

//-------------------

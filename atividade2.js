let nome = "Alef";
console.log(nome);

//-------------------

let string1 = "Olá";
let string2 = "Olá";
let saoIguais = string1 === string2; // Use '===' para comparação estrita
console.log(saoIguais);

//-------------------

let numero = 15;
if (numero > 10) {
    console.log("O número é maior que 10.");
} else {
    console.log("O número não é maior que 10.");
}

//-------------------

let idade = 20;
if (idade >= 18) {
    console.log("Parabéns!");
}

//-------------------

let idade1 = 17; 
if (idade1 >= 16) {
    console.log("A pessoa pode votar.");
} else {
    console.log("A pessoa não pode votar.");
}

//-------------------

let numero1 = 75;
if (numero1 >= 50 && numero1 <= 100) { // Corrigido 'nuemro1' para 'numero1'
    console.log("O número está entre 50 e 100.");
} else {
    console.log("O número não está entre 50 e 100.");
}

//----NIVEL MEDIO----

const nome1 = "Alef";
const idade2 = 17;

if (idade >= 18) {
    console.log(`${nome}, você é maior de idade.`);
} else {
    console.log(`${nome}, você é menor de idade.`);
}

//-------------------

const num1 = 5;
const num2 = 10;

const maior = num1 > num2 ? num1 : num2;
console.log(`O maior número é:${maior}`);

//-------------------

const texto = 'Olá Mundo';

console.log(texto.length > 5 ? 'O texto contém mais de 5 caracteres.' : 'O texto não contém mais de 5 caracteres.');

//-------------------

const numero2 = 4;
const numero3 = 6;
console.log(nuemro2 % 2 === 0 && nuemro % 2 === 0 ? 'Ambos os números são pares.' : 'Um ou ambos os números não são pares.')

//-------------------

const str = 'Aprendendo JavaScript';
console.log(str.includes('JavaScript')? "Afrase contém a palavra 'JavaScript'." : "A frase não contém a palavra 'JavaScript'.");

//-------------------

const salario = 2500;
console.log(salario > 200 ? "O salário está acima de R$2.000.":"O salário não está acima de R$2.000."); 

//----NIVEL DIFICIL----


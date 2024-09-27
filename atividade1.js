//-------NIVEL FACIL-------

const nome = 'Alef';
console.log(nome);

//-------------------------

const x = 10;
const y = 20;
const somaResultado = x + y;
console.log(somaResultado);

//-------------------------

const idade = 17;
const maiorQue18 = idade > 18;
console.log(maiorQue18);

//-------------------------

const a = 10;
const b = 20;
const c = 30;
const contaMedia = (a + b + c) / 3;
console.log(contaMedia);

//-------------------------

let preco = 200; 
preco += preco * 0.10; 
console.log(preco);


//-------NIVEL MEDIO-------

const anoNascimento = 2007; 
const anoAtual = new Date().getFullYear(); 
const idadeCalculada = anoAtual - anoNascimento; 
console.log(idadeCalculada);

//-------------------------

const n = 120; 
const isPar = n % 2 === 0; 
console.log(isPar);

//-------------------------

let salario = 1531; 

if (salario > 2000) {
    salario -= salario * 0.10; 
} else {
    salario += salario * 0.05; 
}
console.log(salario);

//-------------------------

const r = 5;
const pi = Math.PI
const perimetro = 2*pi*r;
console.log(perimetro);

//-------------------------

const num1 = 90;
const num2 = 50;
const maior = num1>num2 ? num1 :num2;
console.log(maior);

//-------------------------

const celsius = 89
const fahrenheit = (celsius*9/5)+32;
console.log(fahrenheit);

//-------------------------

let a1 = 5; 
let b1 = 10; 

a1 = a1 + b1
b1 = a1 - b1
a1 = a1 - b1

console.log(`a1: ${a1}, b1: ${b1}`);

//-------NIVEL DIFICIL-------

const num = 15;
const divisivelPor3e5 = (num % 3 === 0) && (num % 5 === 0);
console.log(divisivelPor3e5);
//-------------------------
// oi :)
// não tem internet ;-;
// bom dia :)
// chato isso :(
//-------------------------

let n1 = 5; 
let fatorial = 1;

for(let i= 1; i<=n;i++){
    fatorial*=i;
}

console.log(`O fatorail de ${n1} é: ${fatorial}`);

//-------------------------

let lado1= 7;
let lado2= 10;
let lado3= 5;

const formaTriangulo = (lado1 + lado2>lado3) && (lado1 + lado3> lado2) && (lado2 + lado3> lado1);

if (formaTriangulo){
    console.log('Os números podem formar um triângulo válido.');
}else{
    console.log('Os números NÃO podem formar um triângulo válido.');
}

//-------------------------

let x1 = 15;  

const estaNoIntervalo = (x >= 10) && (x <= 20);

console.log(`O número ${x} está no intervalo [10, 20]? ${estaNoIntervalo}`);

//-------------------------

let ano = 2024; 

const ehBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

console.log(`O ano ${ano} é bissexto? ${ehBissexto}`);

//-------------------------

let num3 = 10;  
let num4 = 20;  

let maior1 = (num1 > num2) ? num1 : num2;

console.log(`O maior número entre ${num1} e ${num2} é: ${maior}`);

//-------------------------

let num5 = 8;  
let num6 = 5;  

let resultado = (num1 - num2) ** 2;

console.log(`O quadrado da diferença entre ${num1} e ${num2} é: ${resultado}`);

//-------------------------

let nota1 = 7.5;  
let nota2 = 8.0;  
let nota3 = 9.0;  

let peso1 = 2;
let peso2 = 3;
let peso3 = 5;

let mediaPonderada = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3);

console.log(`A média ponderada das notas é: ${mediaPonderada.toFixed(2)}`);

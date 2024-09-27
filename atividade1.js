//-------NIVEL FACIL-------

let nome = 'Alef';  // A variável 'nome' recebe o valor 'Alef'.
console.log(nome);   // Exibe o valor de 'nome' no console.

//-------------------------

let x = 10;         // Variável 'x' recebe o valor 10.
let y = 20;         // Variável 'y' recebe o valor 20.
const somaResultado = x + y;  // Calcula a soma de 'x' e 'y' e armazena em 'somaResultado'.
console.log(somaResultado);   // Exibe o resultado da soma (30) no console.

//-------------------------

let idade = 17;          // Variável 'idade' recebe o valor 17.
console.log(idade > 18);  // Verifica se 'idade' é maior que 18 e exibe true ou false (false neste caso).

//-------------------------

let a = 10;              // Atribui 10 a 'a'.
let b = 20;              // Atribui 20 a 'b'.
let c = 30;              // Atribui 30 a 'c'.
const contaMedia = (a + b + c) / 3;  // Calcula a média dos três valores e armazena em 'contaMedia'.
console.log(contaMedia);   // Exibe a média (20) no console.

//-------------------------

let preco = 200;         // Define 'preco' como 200.
preco += preco * 0.10;   // Aumenta o preço em 10% (200 + 20 = 220).
console.log(preco);      // Exibe o novo valor de 'preco' (220) no console.

//-------NIVEL MEDIO-------

let anoNascimento = 2007;                    // Ano de nascimento.
let anoAtual = new Date().getFullYear();      // Obtém o ano atual.
const idadeCalculada = anoAtual - anoNascimento;  // Calcula a idade com base no ano atual.
console.log(idadeCalculada);                  // Exibe a idade no console.

//-------------------------

const n = 120;            // Define o valor de 'n' como 120.
const isPar = n % 2 === 0;  // Verifica se 'n' é par (divisão por 2 com resto 0).
console.log(isPar);        // Exibe 'true' (120 é par).

//-------------------------

let salario = 1531;  // Define o salário.

if (salario > 2000) { 
    salario -= salario * 0.10;  // Se o salário for maior que 2000, aplica um desconto de 10%.
} else {
    salario += salario * 0.05;  // Caso contrário, aplica um aumento de 5%.
}
console.log(salario);  // Exibe o novo valor do salário.

//-------------------------

let r = 5;                 // Define o raio de um círculo.
const perimetro = 2 * Math.PI * r;  // Calcula o perímetro (2πr).
console.log(perimetro);    // Exibe o valor do perímetro.

//-------------------------

let num1 = 90;             // Define 'num1' como 90.
let num2 = 50;             // Define 'num2' como 50.
const maior = num1 > num2 ? num1 : num2;  // Usa o operador ternário para determinar o maior número.
console.log(maior);        // Exibe o maior número (90).

//-------------------------

const celsius = 89;         // Define a temperatura em Celsius.
const fahrenheit = (celsius * 9 / 5) + 32;  // Converte para Fahrenheit.
console.log(fahrenheit);   // Exibe a temperatura em Fahrenheit.

//-------------------------

let a1 = 5;      // Inicializa 'a1' com 5.
let b1 = 10;     // Inicializa 'b1' com 10.

a1 = a1 + b1;    // 'a1' recebe a soma de 'a1' e 'b1'.
b1 = a1 - b1;    // 'b1' recebe o valor original de 'a1'.
a1 = a1 - b1;    // 'a1' recebe o valor original de 'b1'.
console.log(`a1: ${a1}, b1: ${b1}`);  // Exibe os valores trocados.

//-------NIVEL DIFICIL-------

const num = 15;  
const divisivelPor3e5 = (num % 3 === 0) && (num % 5 === 0);  // Verifica se 'num' é divisível por 3 e por 5.
console.log(divisivelPor3e5);  // Exibe 'false' (15 não é divisível por ambos).

//-------------------------

let n1 = 5;               // Define 'n1' como 5.
let fatorial = 1;         // Inicializa 'fatorial' com 1.

for (let i = 1; i <= n1; i++) {  
    fatorial *= i;        // Calcula o fatorial de 'n1'.
}
console.log(`O fatorial de ${n1} é: ${fatorial}`);  // Exibe o fatorial (120).

//-------------------------

let lado1 = 7;
let lado2 = 10;
let lado3 = 5;

const formaTriangulo = (lado1 + lado2 > lado3) && (lado1 + lado3 > lado2) && (lado2 + lado3 > lado1);  // Verifica se é possível formar um triângulo.

if (formaTriangulo) {
    console.log('Os números podem formar um triângulo válido.');
} else {
    console.log('Os números NÃO podem formar um triângulo válido.');
}

//-------------------------

let x1 = 15;  
const estaNoIntervalo = (x1 >= 10) && (x1 <= 20);  // Verifica se 'x1' está entre 10 e 20.
console.log(`O número ${x1} está no intervalo [10, 20]? ${estaNoIntervalo}`);

//-------------------------

let ano = 2024;  
const ehBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);  // Verifica se o ano é bissexto.
console.log(`O ano ${ano} é bissexto? ${ehBissexto}`);

//-------------------------

let num3 = 10;  
let num4 = 20;  

let maior1 = (num3 > num4) ? num3 : num4;  // Determina o maior número entre 'num3' e 'num4'.
console.log(`O maior número entre ${num3} e ${num4} é: ${maior1}`);

//-------------------------

let num5 = 8;  
let num6 = 5;  

let resultado = (num5 - num6) ** 2;  // Calcula o quadrado da diferença entre 'num5' e 'num6'.
console.log(`O quadrado da diferença entre ${num5} e ${num6} é: ${resultado}`);

//-------------------------

let nota1 = 7.5;  
let nota2 = 8.0;  
let nota3 = 9.0;  

let peso1 = 2;
let peso2 = 3;
let peso3 = 5;

let mediaPonderada = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3);  // Calcula a média ponderada.
console.log(`A média ponderada das notas é: ${mediaPonderada.toFixed(2)}`);  // Exibe a média com 2 casas decimais.


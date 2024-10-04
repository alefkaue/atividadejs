//-------NIVEL FACIL-------

// 1. A variável 'nome' recebe o valor 'Alef'.
let nome = 'Alef';  
console.log(nome);   // Exibe o valor de 'nome' no console.

//-------------------------

// 2. Variáveis 'x' e 'y' recebem valores.
let x = 10;         
let y = 20;         
const somaResultado = x + y;  // Calcula a soma de 'x' e 'y'.
console.log(somaResultado);   // Exibe o resultado da soma (30) no console.

//-------------------------

// 3. Variável 'idade' recebe o valor 17.
let idade = 17;          
console.log(idade > 18);  // Verifica se 'idade' é maior que 18; resultado: false.

//-------------------------

// 4. Atribui valores a 'a', 'b' e 'c'.
let a = 10;              
let b = 20;              
let c = 30;              
const contaMedia = (a + b + c) / 3;  // Calcula a média.
console.log(contaMedia);   // Exibe a média (20) no console.

//-------------------------

// 5. Define 'preco' como 200.
let preco = 200;         
preco += preco * 0.10;   // Aumenta o preço em 10%.
console.log(preco);      // Exibe o novo valor de 'preco' (220) no console.

//-------NIVEL MEDIO-------

// 6. Ano de nascimento e cálculo da idade.
let anoNascimento = 2007;                    
let anoAtual = new Date().getFullYear();      
const idadeCalculada = anoAtual - anoNascimento;  // Calcula a idade.
console.log(idadeCalculada);                  // Exibe a idade no console.

//-------------------------

// 7. Define o valor de 'n' como 120.
const n = 120;            
const isPar = n % 2 === 0;  // Verifica se 'n' é par.
console.log(isPar);        // Exibe 'true' (120 é par).

//-------------------------

// 8. Define o salário.
let salario = 1531;  

if (salario > 2000) { 
    salario -= salario * 0.10;  // Aplica desconto de 10% se maior que 2000.
} else {
    salario += salario * 0.05;  // Aplica aumento de 5% caso contrário.
}
console.log(salario);  // Exibe o novo valor do salário.

//-------------------------

// 9. Define o raio de um círculo.
let r = 5;                 
const perimetro = 2 * Math.PI * r;  // Calcula o perímetro.
console.log(perimetro);    // Exibe o valor do perímetro.

//-------------------------

// 10. Define 'num1' e 'num2'.
let num1 = 90;             
let num2 = 50;             
const maior = num1 > num2 ? num1 : num2;  // Usa operador ternário para determinar o maior número.
console.log(maior);        // Exibe o maior número (90).

//-------------------------

// 11. Define a temperatura em Celsius.
const celsius = 89;         
const fahrenheit = (celsius * 9 / 5) + 32;  // Converte para Fahrenheit.
console.log(fahrenheit);   // Exibe a temperatura em Fahrenheit.

//-------------------------

// 12. Inicializa 'a1' e 'b1'.
let a1 = 5;      
let b1 = 10;     

// Troca os valores de 'a1' e 'b1'.
a1 = a1 + b1;    
b1 = a1 - b1;    
a1 = a1 - b1;    
console.log(`a1: ${a1}, b1: ${b1}`);  // Exibe os valores trocados.

//-------NIVEL DIFICIL-------

// 13. Define 'num'.
const num = 15;  
const divisivelPor3e5 = (num % 3 === 0) && (num % 5 === 0);  // Verifica se 'num' é divisível por 3 e por 5.
console.log(divisivelPor3e5);  // Exibe 'false' (15 não é divisível por ambos).

//-------------------------

// 14. Define 'n1' e inicializa 'fatorial'.
let n1 = 5;               
let fatorial = 1;         

// Calcula o fatorial de 'n1'.
for (let i = 1; i <= n1; i++) {  
    fatorial *= i;        
}
console.log(`O fatorial de ${n1} é: ${fatorial}`);  // Exibe o fatorial (120).

//-------------------------

// 15. Define os lados de um triângulo.
let lado1 = 7;
let lado2 = 10;
let lado3 = 5;

// Verifica se é possível formar um triângulo.
const formaTriangulo = (lado1 + lado2 > lado3) && (lado1 + lado3 > lado2) && (lado2 + lado3 > lado1);  

if (formaTriangulo) {
    console.log('Os números podem formar um triângulo válido.');
} else {
    console.log('Os números NÃO podem formar um triângulo válido.');
}

//-------------------------

// 16. Define 'x1'.
let x1 = 15;  
const estaNoIntervalo = (x1 >= 10) && (x1 <= 20);  // Verifica se 'x1' está entre 10 e 20.
console.log(`O número ${x1} está no intervalo [10, 20]? ${estaNoIntervalo}`);

//-------------------------

// 17. Define 'ano'.
let ano = 2024;  
const ehBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);  // Verifica se o ano é bissexto.
console.log(`O ano ${ano} é bissexto? ${ehBissexto}`);

//-------------------------

// 18. Define 'num3' e 'num4'.
let num3 = 10;  
let num4 = 20;  

let maior1 = (num3 > num4) ? num3 : num4;  // Determina o maior número entre 'num3' e 'num4'.
console.log(`O maior número entre ${num3} e ${num4} é: ${maior1}`);

//-------------------------

// 19. Define 'num5' e 'num6'.
let num5 = 8;  
let num6 = 5;  

let resultado = (num5 - num6) ** 2;  // Calcula o quadrado da diferença entre 'num5' e 'num6'.
console.log(`O quadrado da diferença entre ${num5} e ${num6} é: ${resultado}`);

//-------------------------

// 20. Define notas e pesos.
let nota1 = 7.5;  
let nota2 = 8.0;  
let nota3 = 9.0;  

let peso1 = 2;
let peso2 = 3;
let peso3 = 5;

// Calcula a média ponderada.
let mediaPonderada = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3);  
console.log(`A média ponderada das notas é: ${mediaPonderada.toFixed(2)}`);  // Exibe a média com 2 casas decimais.

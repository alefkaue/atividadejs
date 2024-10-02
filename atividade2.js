// Baixa Complexidade
let meuNome = "Seu Nome"; // Declara uma variável com o nome
console.log(meuNome); // Exibe o nome no console

//----------------

let string1 = "exemplo"; // Declara a primeira string
let string2 = "exemplo"; // Declara a segunda string
console.log(string1 == string2); // Compara as strings; resultado: true

//----------------

let numero = 15; // Declara um número
console.log(numero > 10); // Verifica se o número é maior que 10; resultado: true

//----------------

let idadeAluno = 20; // Declara a idade do aluno
if (idadeAluno >= 18) {
    console.log("Parabéns!"); // Exibe mensagem se maior de idade
}

//----------------

let idadeVotante = 17; // Declara a idade do votante
if (idadeVotante >= 16) {
    console.log("Pode votar!"); // Permissão para votar se a idade for 16 ou mais
} else {
    console.log("Não pode votar."); // Mensagem caso contrário
}

//----------------

let numeroIntervalo = 75; // Declara um número no intervalo
if (numeroIntervalo >= 50 && numeroIntervalo <= 100) {
    console.log("O número está entre 50 e 100."); // Verifica se o número está entre 50 e 100
}

// Média Complexidade
let nomeUsuario = "Alice"; // Declara o nome do usuário
let idadeUsuario = 19; // Declara a idade do usuário
if (idadeUsuario >= 18) {
    console.log(nomeUsuario + ", você é maior de idade."); // Mensagem para maiores de idade
} else {
    console.log(nomeUsuario + ", você é menor de idade."); // Mensagem para menores de idade
}

//----------------

let num1 = 10; // Declara o primeiro número
let num2 = 15; // Declara o segundo número
let maior = num1 > num2 ? num1 : num2; // Usa operador ternário para encontrar o maior número
console.log("O maior número é: " + maior); // Exibe o maior número

//----------------

let texto = "Exemplo"; // Declara uma string
console.log(texto.length > 5); // Verifica se o comprimento da string é maior que 5; resultado: true

//----------------

let numeroPar1 = 4; // Declara o primeiro número par
let numeroPar2 = 6; // Declara o segundo número par
if (numeroPar1 % 2 === 0 && numeroPar2 % 2 === 0) {
    console.log("Ambos os números são pares."); // Verifica se ambos os números são pares
}

//----------------

let frase = "Estou aprendendo JavaScript!"; // Declara uma frase
console.log(frase.includes("JavaScript")); // Verifica se a frase contém "JavaScript"; resultado: true

//----------------

let salario = 2500; // Declara um salário
console.log(salario > 2000); // Verifica se o salário é maior que 2000; resultado: true

// Alta Complexidade
let senha = "senha123"; // Declara uma senha
let temNumero = /\d/.test(senha); // Verifica se a senha contém um número
console.log(senha.length >= 8 && temNumero); // Verifica se a senha tem pelo menos 8 caracteres e contém número; resultado: true

//----------------

let nota1 = 8; // Declara a primeira nota
let nota2 = 7; // Declara a segunda nota
let nota3 = 9; // Declara a terceira nota
let media = (nota1 + nota2 + nota3) / 3; // Calcula a média das notas
console.log(media > 7 ? "Aprovado" : "Reprovado"); // Exibe "Aprovado" ou "Reprovado" com base na média

//----------------

let anoAtual = new Date().getFullYear(); // Obtém o ano atual
let anoBissexto = (anoAtual % 4 === 0 && anoAtual % 100 !== 0) || (anoAtual % 400 === 0); // Verifica se o ano é bissexto
console.log(anoBissexto ? "O ano é bissexto." : "O ano não é bissexto."); // Exibe resultado da verificação

//----------------

let numero1 = 3; // Declara o primeiro número
let numero2 = 4; // Declara o segundo número
let numero3 = 7; // Declara o terceiro número
console.log(numero3 === numero1 + numero2); // Verifica se o terceiro número é igual à soma dos dois primeiros; resultado: true

//----------------

let usuario = "usuarioTeste"; // Declara um nome de usuário
let senhaCorreta = "senha123"; // Declara a senha correta
let tentativas = 0; // Inicializa contagem de tentativas

while (tentativas < 3) { // Permite até 3 tentativas
    let senhaUsuario = "senhaErrada"; // Simula uma senha do usuário
    if (senhaUsuario === senhaCorreta) {
        console.log("Login bem-sucedido!"); // Exibe mensagem de sucesso
        break; // Sai do loop se o login for bem-sucedido
    } else {
        tentativas++; // Incrementa contagem de tentativas
        if (tentativas === 3) {
            console.log("Usuário bloqueado."); // Mensagem de bloqueio após 3 tentativas
        }
    }
}

//----------------

let notaExtra = true; // Indica se o aluno fez trabalho extra
let presenca = 85; // Percentual de presença
let notaFinal = 8; // Nota final do aluno

if (notaExtra && presenca > 80 && notaFinal > 7) {
    console.log("Aprovado com condições especiais!"); // Mensagem de aprovação com condições especiais
} else {
    console.log("A situação do aluno deve ser reavaliada."); // Mensagem de reavaliação
}

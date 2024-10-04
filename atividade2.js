// Baixa Complexidade

// 1. Declara uma variável com o nome
let meuNome = "Alef"; 
console.log(meuNome); // Exibe o nome no console

//----------------

// 2. Declara a primeira e a segunda string
let string1 = "exemplo"; 
let string2 = "exemplo"; 
console.log(string1 == string2 ? "As strings são iguais." : "As strings são diferentes."); // Compara as strings

//----------------

// 3. Declara um número
let numero = 15; 
console.log(numero > 10 ? "O número é maior que 10." : "O número não é maior que 10."); // Verifica se o número é maior que 10

//----------------

// 4. Declara a idade do aluno
let idadeAluno = 20; 
if (idadeAluno >= 18) {
    console.log("Parabéns! Você é maior de idade."); // Exibe mensagem se maior de idade
} else {
    console.log("Você é menor de idade."); // Mensagem caso contrário
}

//----------------

// 5. Declara a idade do votante
let idadeVotante = 17; 
if (idadeVotante >= 16) {
    console.log("Você pode votar!"); // Permissão para votar se a idade for 16 ou mais
} else {
    console.log("Você não pode votar."); // Mensagem caso contrário
}

//----------------

// 6. Declara um número no intervalo
let numeroIntervalo = 200; 

if (numeroIntervalo >= 50 && numeroIntervalo <= 100) {
    console.log("O número está entre 50 e 100."); // Verifica se o número está entre 50 e 100
} else {
    console.log("O número não está entre 50 e 100."); // Mensagem para quando não está no intervalo
}

// Média Complexidade

// 7. Declara o nome do usuário e sua idade
let nomeUsuario = "Alice"; 
let idadeUsuario = 19; 
if (idadeUsuario >= 18) {
    console.log(nomeUsuario + ", você é maior de idade."); // Mensagem para maiores de idade
} else {
    console.log(nomeUsuario + ", você é menor de idade."); // Mensagem para menores de idade
}

//----------------

// 8. Declara o primeiro e o segundo número
let num1 = 10; 
let num2 = 15; 
let maior = num1 > num2 ? num1 : num2; // Usa operador ternário para encontrar o maior número
console.log("O maior número é: " + maior); // Exibe o maior número

//----------------

// 9. Declara uma string
let texto = "Exemplo"; 
if (texto.length > 5) {
    console.log("O comprimento da string é maior que 5."); // Verifica se o comprimento é maior que 5
} else if (texto.length < 5) {
    console.log("O comprimento da string é menor que 5."); // Verifica se é menor que 5
} else {
    console.log("O comprimento da string é igual a 5."); // Se for igual a 5
}

//----------------

// 10. Declara o primeiro e o segundo número par
let numeroPar1 = 4; 
let numeroPar2 = 6; 

if (numeroPar1 % 2 === 0 && numeroPar2 % 2 === 0) {
    console.log("Ambos os números são pares."); // Verifica se ambos os números são pares
} else if (numeroPar1 % 2 === 0 || numeroPar2 % 2 === 0) {
    console.log("Apenas um dos números é par."); // Verifica se apenas um dos números é par
} else {
    console.log("Nenhum dos números é par."); // Mensagem se nenhum dos números é par
}

//----------------

// 11. Declara uma frase
let frase = "Estou aprendendo JavaScript!"; 
if (frase.includes("JavaScript")) {
    console.log("A frase contém a palavra 'JavaScript'."); // Mensagem se contém a palavra
} else {
    console.log("A frase não contém a palavra 'JavaScript'."); // Mensagem se não contém a palavra
}

//----------------

// 12. Declara um salário
let salario = 2500; 
console.log(salario > 2000 ? "O salário é maior que 2000." : "O salário não é maior que 2000."); // Verifica se o salário é maior que 2000

// Alta Complexidade

// 13. Declara uma senha
let senha = "senha123"; 
let temNumero = /\d/.test(senha); // Verifica se a senha contém um número
if (senha.length >= 8 && temNumero) {
    console.log("A senha é válida."); // Verifica se a senha é válida
} else {
    console.log("A senha não é válida."); // Mensagem se a senha não é válida
}

//----------------

// 14. Declara três notas
let nota1 = 8; 
let nota2 = 7; 
let nota3 = 9; 
let media = (nota1 + nota2 + nota3) / 3; // Calcula a média das notas
console.log(media > 7 ? "Aprovado" : "Reprovado"); // Exibe "Aprovado" ou "Reprovado" com base na média

//----------------

// 15. Obtém o ano atual
let anoAtual = new Date().getFullYear(); 
let anoBissexto = (anoAtual % 4 === 0 && anoAtual % 100 !== 0) || (anoAtual % 400 === 0); // Verifica se o ano é bissexto
console.log(anoBissexto ? "O ano é bissexto." : "O ano não é bissexto."); // Exibe resultado da verificação

//----------------

// 16. Declara três números
let numero1 = 3; 
let numero2 = 4; 
let numero3 = 7; 
console.log(numero3 === numero1 + numero2 ? "O terceiro número é igual à soma dos dois primeiros." : "O terceiro número não é igual à soma dos dois primeiros."); // Verifica se o terceiro número é igual à soma dos dois primeiros

//----------------

// 17. Declara um nome de usuário e a senha correta
let usuario = "usuarioTeste"; 
let senhaCorreta = "senha123"; 
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

// 18. Indica se o aluno fez trabalho extra e declara presença e nota final
let notaExtra = true; 
let presenca = 85; // Percentual de presença
let notaFinal = 8; // Nota final do aluno

if (notaExtra && presenca > 80 && notaFinal > 7) {
    console.log("Aprovado com condições especiais!"); // Mensagem de aprovação com condições especiais
} else {
    console.log("A situação do aluno deve ser reavaliada."); // Mensagem de reavaliação
}

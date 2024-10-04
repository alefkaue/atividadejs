// Baixa Complexidade

// 1. Declara uma variável com o nome
let meuNome = "Seu Nome"; 
console.log(meuNome); // Exibe o nome no console

//----------------

 // 2. Declara a primeira e a segunda string
let string1 = "exemplo"; 
let string2 = "exemplo"; 
console.log(string1 == string2); // Compara as strings; resultado: true

//----------------

 // 3. Declara um número
let numero = 15; 
console.log(numero > 10); // Verifica se o número é maior que 10; resultado: true

//----------------

 // 4. Declara a idade do aluno
let idadeAluno = 20; 
if (idadeAluno >= 18) {
    console.log("Parabéns!"); // Exibe mensagem se maior de idade
}

//----------------

 // 5. Declara a idade do votante
let idadeVotante = 17; 
if (idadeVotante >= 16) {
    console.log("Pode votar!"); // Permissão para votar se a idade for 16 ou mais
} else {
    console.log("Não pode votar."); // Mensagem caso contrário
}

//----------------

 // 6. Declara um número no intervalo
let numeroIntervalo = 75; 
if (numeroIntervalo >= 50 && numeroIntervalo <= 100) {
    console.log("O número está entre 50 e 100."); // Verifica se o número está entre 50 e 100
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
console.log(texto.length > 5); // Verifica se o comprimento da string é maior que 5; resultado: true

//----------------

 // 10. Declara o primeiro e o segundo número par
let numeroPar1 = 4; 
let numeroPar2 = 6; 
if (numeroPar1 % 2 === 0 && numeroPar2 % 2 === 0) {
    console.log("Ambos os números são pares."); // Verifica se ambos os números são pares
}

//----------------

 // 11. Declara uma frase
let frase = "Estou aprendendo JavaScript!"; 
console.log(frase.includes("JavaScript")); // Verifica se a frase contém "JavaScript"; resultado: true

//----------------

 // 12. Declara um salário
let salario = 2500; 
console.log(salario > 2000); // Verifica se o salário é maior que 2000; resultado: true

// Alta Complexidade

// 13. Declara uma senha
let senha = "senha123"; 
let temNumero = /\d/.test(senha); // Verifica se a senha contém um número
console.log(senha.length >= 8 && temNumero); // Verifica se a senha tem pelo menos 8 caracteres e contém número; resultado: true

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
console.log(numero3 === numero1 + numero2); // Verifica se o terceiro número é igual à soma dos dois primeiros; resultado: true

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

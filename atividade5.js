// NÍVEL FÁCIL

// 1. Função de Saudação
function saudacao(nome) {
    return `Olá, ${nome}!`;
}

// 2. Função de Soma
function soma(a, b) {
    return a + b;
}

// 3. Função para Verificar Par ou Ímpar
function parOuImpar(numero) {
    return numero % 2 === 0 ? "Par" : "Ímpar";
}

// 4. Função de Multiplicação
function multiplica(a, b) {
    return a * b;
}

// 5. Função para Converter Celsius em Fahrenheit
function celsiusParaFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

// 6. Função para Calcular a Média
function calculaMedia(a, b, c) {
    return (a + b + c) / 3;
}

// 7. Função para Converter Minutos em Segundos
function minutosParaSegundos(minutos) {
    return minutos * 60;
}

// 8. Função para Verificar se um Número é Positivo
function ehPositivo(numero) {
    return numero > 0;
}

// 9. Função para Repetir uma Palavra
function repetePalavra(palavra, vezes) {
    return palavra.repeat(vezes);
}

// 10. Função para Calcular a Área de um Retângulo
function calculaAreaRetangulo(base, altura) {
    return base * altura;
}

// NÍVEL MÉDIO

// 1. Função para Verificar Palíndromo
function verificaPalindromo(palavra) {
    let invertida = palavra.split('').reverse().join('');
    return palavra === invertida;
}

// 2. Função de Fatorial
function fatorial(n) {
    return n === 0 ? 1 : n * fatorial(n - 1);
}

// 3. Função para Filtrar Números Pares
function filtraPares(array) {
    return array.filter(numero => numero % 2 === 0);
}

// 4. Função de Contagem de Vogais
function contaVogais(texto) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    return texto.toLowerCase().split('').filter(letra => vogais.includes(letra)).length;
}

// 5. Função de Ordenação de Strings
function ordenaStrings(array) {
    return array.slice().sort();
}

// NÍVEL DIFÍCIL

// 1. Função para Contar Ocorrências de uma Palavra em um Texto
function contaOcorrencias(palavra, texto) {
    return texto.toLowerCase().split(' ').filter(palavraAtual => palavraAtual === palavra.toLowerCase()).length;
}

// 2. Função para Encontrar o Primeiro Nome que Começa com uma Letra Específica
function encontraNome(letra, nomes) {
    return nomes.find(nome => nome.startsWith(letra));
}

// 3. Função para Calcular a Média de Idades
function mediaIdades(idades) {
    let total = idades.reduce((soma, idade) => soma + idade, 0);
    return total / idades.length;
}

// 4. Função para Remover Duplicatas de um Array
function removeDuplicatas(array) {
    return Array.from(new Set(array));
}

// 5. Função para Ordenar uma Lista de Objetos por Propriedade
function ordenaPorPreco(produtos) {
    return produtos.sort((a, b) => a.preco - b.preco);
}

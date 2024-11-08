//-----NIVEL FACIL-----

// 1. Adiciona números em um array.
let numerosFacil1 = []; // Cria um array vazio
numerosFacil1.push(1, 2, 3); // Adiciona os números 1, 2 e 3 ao array
console.log(numerosFacil1); // Imprime o array: [1, 2, 3]

//---------------------

// 2. Adiciona números em um array.
let numerosFacil2 = []; // Outro array vazio
numerosFacil2.push(1, 2, 3); // Adiciona os números 1, 2 e 3
console.log(numerosFacil2); // Imprime: [1, 2, 3]

//---------------------

// 3. Altera um elemento de um array.
let arrayFacil3 = [1, 2, 3]; // Cria um array com os números 1, 2 e 3
arrayFacil3[1] = 100; // Altera o segundo elemento (índice 1) para 100
console.log(arrayFacil3); // Imprime: [1, 100, 3]

//---------------------

// 4. Exibe o comprimento de um array de frutas.
let frutasFacil4 = ["maçã", "banana", "laranja", "uva", "kiwi"]; // Array de frutas
console.log(frutasFacil4.length); // Imprime o comprimento do array: 5

//---------------------

// 5. Calcula a soma de um array de números.
let numerosFacil5 = [1, 2, 3, 4, 5]; // Array de números
let somaFacil5 = numerosFacil5.reduce((acc, curr) => acc + curr, 0); // Soma todos os elementos
console.log(somaFacil5); // Imprime a soma: 15

//---------------------

// 6. Remove o último elemento de um array.
let arrayFacil6 = [1, 2, 3, 4, 5]; // Array com números
arrayFacil6.pop(); // Remove o último elemento (5)
console.log(arrayFacil6); // Imprime: [1, 2, 3, 4]

//---------------------

// 7. Adiciona um elemento no início de um array.
let arrayFacil7 = [2, 3, 4]; // Array com números
arrayFacil7.unshift(1); // Adiciona o número 1 no início do array
console.log(arrayFacil7); // Imprime: [1, 2, 3, 4]

//---------------------

// 8. Combina dois arrays.
let arrayFacil8 = [1, 2, 3]; // Primeiro array
let arrayFacil9 = [4, 5, 6]; // Segundo array
let arrayCombinadoFacil8 = arrayFacil8.concat(arrayFacil9); // Combina os dois arrays
console.log(arrayCombinadoFacil8); // Imprime: [1, 2, 3, 4, 5, 6]

//---------------------


//-----NIVEL MEDIO-----

// 1. Percorra um array com um `for` e exiba todos os elementos.
let numerosMedio1 = [10, 20, 30, 40]; // Array de números
for (let i = 0; i < numerosMedio1.length; i++) { // Loop para percorrer o array
    console.log(numerosMedio1[i]); // Imprime cada elemento
}

//---------------------

// 2. Crie um array de objetos que representem livros e percorra-o exibindo o nome de cada livro.
let livrosMedio2 = [ // Array de objetos
    {nome: 'Harry Potter', autor: 'J.K. Rowling'},
    {nome: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien'}
];
for (let i = 0; i < livrosMedio2.length; i++) { // Loop para percorrer o array de livros
    console.log(livrosMedio2[i].nome); // Imprime o nome de cada livro
}

//---------------------

// 3. Utilize o método `map()` para dobrar os valores de um array de números.
let numerosMedio3 = [1, 2, 3, 4]; // Array de números
let dobradosMedio3 = numerosMedio3.map(x => x * 2); // Dobra cada elemento do array
console.log(dobradosMedio3); // Imprime: [2, 4, 6, 8]

//---------------------

// 4. Filtre um array para conter apenas números maiores que 10.
let numerosMedio4 = [5, 15, 20, 3, 12]; // Array de números
let maioresQueDezMedio4 = numerosMedio4.filter(x => x > 10); // Filtra números maiores que 10
console.log(maioresQueDezMedio4); // Imprime: [15, 20, 12]

//---------------------

// 5. Crie um array de números e verifique se todos os elementos são pares usando o método `every()`.
let numerosMedio5 = [2, 4, 6, 8]; // Array de números
let todosParesMedio5 = numerosMedio5.every(x => x % 2 === 0); // Verifica se todos são pares
console.log(todosParesMedio5); // Imprime: true

//---------------------

// 6. Encontre o primeiro número negativo em um array utilizando o método `find()`.
let numerosMedio6 = [3, 5, -1, 7, -3]; // Array com números
let primeiroNegativoMedio6 = numerosMedio6.find(x => x < 0); // Encontra o primeiro número negativo
console.log(primeiroNegativoMedio6); // Imprime: -1

//---------------------

// 7. Ordene um array de números em ordem crescente.
let numerosMedio7 = [5, 3, 8, 1, 4]; // Array com números
numerosMedio7.sort((a, b) => a - b); // Ordena o array em ordem crescente
console.log(numerosMedio7); // Imprime: [1, 3, 4, 5, 8]

//---------------------

// 8. Adicione um novo elemento a um array em uma posição específica, sem substituir nenhum outro elemento.
let numerosMedio8 = [1, 2, 4, 5]; // Array com números
numerosMedio8.splice(2, 0, 3); // Adiciona o número 3 na posição 2 sem remover elementos
console.log(numerosMedio8); // Imprime: [1, 2, 3, 4, 5]

//---------------------


//-----NIVEL DIFICIL-----

// 1. Crie uma função que recebe dois arrays e retorna um array com os elementos que estão presentes em ambos (interseção).
function interseccaoArraysDificil1(array1, array2) {
    return array1.filter(item => array2.includes(item)); // Filtra elementos que estão em ambos os arrays
}
let arrayADificil1 = [1, 2, 3, 4]; // Primeiro array
let arrayBDificil1 = [3, 4, 5, 6]; // Segundo array
console.log(interseccaoArraysDificil1(arrayADificil1, arrayBDificil1)); // Imprime: [3, 4]

//---------------------

// 2. Implemente uma função que, dado um array de números, retorna a média aritmética dos valores.
function mediaAritmeticaDificil2(numeros) {
    let soma = numeros.reduce((acc, curr) => acc + curr, 0); // Calcula a soma dos elementos
    return soma / numeros.length; // Retorna a média
}
let numerosDificil2 = [10, 20, 30]; // Array de números
console.log(mediaAritmeticaDificil2(numerosDificil2)); // Imprime: 20

//---------------------

// 3. Crie uma função que inverte a ordem dos elementos de um array, sem utilizar o método `reverse()`.
function inverterArrayDificil3(array) {
    let arrayInvertido = []; // Array vazio para armazenar os elementos invertidos
    for (let i = array.length - 1; i >= 0; i--) { // Loop de trás para frente
        arrayInvertido.push(array[i]); // Adiciona cada elemento ao novo array
    }
    return arrayInvertido; // Retorna o array invertido
}
let numerosDificil3 = [1, 2, 3, 4]; // Array de números
console.log(inverterArrayDificil3(numerosDificil3)); // Imprime: [4, 3, 2, 1]

//---------------------

// 4. Crie uma função que remove os elementos duplicados de um array.
function removerDuplicadosDificil4(array) {
    return Array.from(new Set(array)); // Cria um Set para remover duplicatas e converte de volta para array
}
let numerosDificil4 = [1, 2, 2, 3, 4, 4]; // Array com duplicatas
console.log(removerDuplicadosDificul4(numerosDificil4)); // Imprime: [1, 2, 3, 4]

//---------------------

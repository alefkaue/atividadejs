//-----NIVEL FACIL-----

// 1. Adiciona números em um array.
let numerosFacil1 = [];
numerosFacil1.push(1, 2, 3);
console.log(numerosFacil1); 

//---------------------

// 2. Adiciona números em um array.
let numerosFacil2 = [];
numerosFacil2.push(1, 2, 3);
console.log(numerosFacil2); 

//---------------------

// 3. Altera um elemento de um array.
let arrayFacil3 = [1, 2, 3];
arrayFacil3[1] = 100;
console.log(arrayFacil3); 

//---------------------

// 4. Exibe o comprimento de um array de frutas.
let frutasFacil4 = ["maçã", "banana", "laranja", "uva", "kiwi"];
console.log(frutasFacil4.length); // 5

//---------------------

// 5. Calcula a soma de um array de números.
let numerosFacil5 = [1, 2, 3, 4, 5];
let somaFacil5 = numerosFacil5.reduce((acc, curr) => acc + curr, 0);
console.log(somaFacil5); 

//---------------------

// 6. Remove o último elemento de um array.
let arrayFacil6 = [1, 2, 3, 4, 5];
arrayFacil6.pop();
console.log(arrayFacil6); 

//---------------------

// 7. Adiciona um elemento no início de um array.
let arrayFacil7 = [2, 3, 4];
arrayFacil7.unshift(1);
console.log(arrayFacil7); 

//---------------------

// 8. Combina dois arrays.
let arrayFacil8 = [1, 2, 3];
let arrayFacil9 = [4, 5, 6];
let arrayCombinadoFacil8 = arrayFacil8.concat(arrayFacil9);
console.log(arrayCombinadoFacil8); 

//---------------------


//-----NIVEL MEDIO-----

// 1. Percorra um array com um `for` e exiba todos os elementos.
let numerosMedio1 = [10, 20, 30, 40];
for (let i = 0; i < numerosMedio1.length; i++) {
    console.log(numerosMedio1[i]);
}

//---------------------

// 2. Crie um array de objetos que representem livros e percorra-o exibindo o nome de cada livro.
let livrosMedio2 = [
    {nome: 'Harry Potter', autor: 'J.K. Rowling'},
    {nome: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien'}
];
for (let i = 0; i < livrosMedio2.length; i++) {
    console.log(livrosMedio2[i].nome);
}

//---------------------

// 3. Utilize o método `map()` para dobrar os valores de um array de números.
let numerosMedio3 = [1, 2, 3, 4];
let dobradosMedio3 = numerosMedio3.map(x => x * 2);
console.log(dobradosMedio3); // [2, 4, 6, 8]

//---------------------

// 4. Filtre um array para conter apenas números maiores que 10.
let numerosMedio4 = [5, 15, 20, 3, 12];
let maioresQueDezMedio4 = numerosMedio4.filter(x => x > 10);
console.log(maioresQueDezMedio4); // [15, 20, 12]

//---------------------

// 5. Crie um array de números e verifique se todos os elementos são pares usando o método `every()`.
let numerosMedio5 = [2, 4, 6, 8];
let todosParesMedio5 = numerosMedio5.every(x => x % 2 === 0);
console.log(todosParesMedio5); // true

//---------------------

// 6. Encontre o primeiro número negativo em um array utilizando o método `find()`.
let numerosMedio6 = [3, 5, -1, 7, -3];
let primeiroNegativoMedio6 = numerosMedio6.find(x => x < 0);
console.log(primeiroNegativoMedio6); // -1

//---------------------

// 7. Ordene um array de números em ordem crescente.
let numerosMedio7 = [5, 3, 8, 1, 4];
numerosMedio7.sort((a, b) => a - b);
console.log(numerosMedio7); // [1, 3, 4, 5, 8]

//---------------------

// 8. Adicione um novo elemento a um array em uma posição específica, sem substituir nenhum outro elemento.
let numerosMedio8 = [1, 2, 4, 5]; // Quero adicionar 3 na posição 2
numerosMedio8.splice(2, 0, 3); // (posição, quantos remover, o que adicionar)
console.log(numerosMedio8); // [1, 2, 3, 4, 5]

//---------------------


//-----NIVEL DIFICIL-----

// 1. Crie uma função que recebe dois arrays e retorna um array com os elementos que estão presentes em ambos (interseção).
function interseccaoArraysDificil1(array1, array2) {
    return array1.filter(item => array2.includes(item));
}
let arrayADificil1 = [1, 2, 3, 4];
let arrayBDificil1 = [3, 4, 5, 6];
console.log(interseccaoArraysDificil1(arrayADificil1, arrayBDificil1)); // [3, 4]

//---------------------

// 2. Implemente uma função que, dado um array de números, retorna a média aritmética dos valores.
function mediaAritmeticaDificil2(numeros) {
    let soma = numeros.reduce((acc, curr) => acc + curr, 0);
    return soma / numeros.length;
}
let numerosDificil2 = [10, 20, 30];
console.log(mediaAritmeticaDificil2(numerosDificil2)); // 20

//---------------------

// 3. Crie uma função que inverte a ordem dos elementos de um array, sem utilizar o método `reverse()`.
function inverterArrayDificil3(array) {
    let arrayInvertido = [];
    for (let i = array.length - 1; i >= 0; i--) {
        arrayInvertido.push(array[i]);
    }
    return arrayInvertido;
}
let numerosDificil3 = [1, 2, 3, 4];
console.log(inverterArrayDificil3(numerosDificil3)); // [4, 3, 2, 1]

//---------------------

// 4. Crie uma função que remove os elementos duplicados de um array.
function removerDuplicadosDificil4(array) {
    return Array.from(new Set(array));
}
let numerosDificil4 = [1, 2, 2, 3, 4, 4];
console.log(removerDuplicadosDificil4(numerosDificil4)); // [1, 2, 3, 4]

//---------------------

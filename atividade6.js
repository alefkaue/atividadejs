// 1. Variáveis e Operadores
let preco = 100;
let precoComDesconto = preco * 0.8;
console.log("Preço com desconto: ", precoComDesconto);

// 2. Concatenando Strings
let nome = "João";
let sobrenome = "Silva";
let nomeCompleto = nome + " " + sobrenome;
console.log("Nome completo: ", nomeCompleto);

// 3. Arrays
let numeros = [1, 2, 3, 4, 5];
numeros.forEach(numero => console.log(numero));

// 4. Manipulação de Arrays
let frutas = ['maçã', 'banana', 'laranja'];
frutas.push('uva');
console.log("Frutas: ", frutas);

// 5. Objetos
let pessoa = {
    nome: "Ana",
    idade: 25,
    cidade: "São Paulo"
};
console.log("Nome: ", pessoa.nome, ", Idade: ", pessoa.idade);

// 6. Manipulação de Objetos
pessoa.email = "ana@example.com";
console.log("Pessoa: ", pessoa);

// 7. Arrays e Métodos
let numerosDobro = numeros.map(numero => numero * 2);
console.log("Dobro dos números: ", numerosDobro);

// 8. Filtrando Arrays
let idades = [15, 22, 18, 30, 12];
let maioresDeIdade = idades.filter(idade => idade > 18);
console.log("Maiores de 18: ", maioresDeIdade);

// 9. Looping em Arrays
let cores = ['vermelho', 'verde', 'azul'];
cores.forEach(cor => console.log("Cor: ", cor));

// 10. Objetos Aninhados
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    especificacoes: {
        ano: 2020,
        cor: "preto"
    }
};
console.log("Cor do carro: ", carro.especificacoes.cor);

// 11. Desestruturação de Objetos
let usuario = { nome: "João", idade: 30 };
let { nome: nomeUsuario, idade } = usuario;
console.log("Nome: ", nomeUsuario, ", Idade: ", idade);

// 12. Contagem de Elementos em um Array
let animais = ['cachorro', 'gato', 'pássaro', 'gato'];
let contaGato = animais.filter(animal => animal === 'gato').length;
console.log("Quantidade de 'gato': ", contaGato);

// 13. Operador Ternário
let nota = 8;
let resultado = nota >= 7 ? "Aprovado" : "Reprovado";
console.log("Resultado: ", resultado);

// 14. Transformando Strings
let texto = "Olá, mundo!";
let textoMinusculo = texto.toLowerCase();
console.log("Texto em minúsculas: ", textoMinusculo);

// 15. União de Arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let uniaoArrays = array1.concat(array2);
console.log("União dos arrays: ", uniaoArrays);

// 16. Removendo Elementos de um Array
let numerosParaRemover = [10, 20, 30, 40];
numerosParaRemover.shift();
console.log("Array após remoção: ", numerosParaRemover);

// 17. Verificação de Propriedades de Objetos
let produto = { nome: 'Notebook', preco: 2500 };
console.log(produto.hasOwnProperty('preco') ? "A propriedade 'preco' existe." : "A propriedade 'preco' não existe.");

// 18. Iterando com `for`
let numerosAleatorios = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];
let soma = 0;
for (let numero of numerosAleatorios) {
    soma += numero;
}
console.log("Soma dos números: ", soma);

// 19. Clonando Objetos
let usuarioOriginal = { nome: "Maria", idade: 25 };
let usuarioCopia = Object.assign({}, usuarioOriginal);
usuarioCopia.cidade = "Rio de Janeiro";
console.log("Usuário Original: ", usuarioOriginal);
console.log("Usuário Cópia: ", usuarioCopia);

// 20. Manipulação de Arrays com `reduce`
let numerosParaProduto = [1, 2, 3, 4];
let produtoTotal = numerosParaProduto.reduce((acc, numero) => acc * numero, 1);
console.log("Produto de todos os números: ", produtoTotal);

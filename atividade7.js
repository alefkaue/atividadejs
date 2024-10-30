// 1. toUpperCase e toLowerCase
function formatarNome(nome) {
    console.log(nome.toUpperCase());
    console.log(nome.toLowerCase());
}
formatarNome("Alef");

// 2. includes e indexOf
function verificarLetra(frase) {
    if (frase.includes("a")) {
        console.log("A letra 'a' está na posição:", frase.indexOf("a"));
    } else {
        console.log("A letra 'a' não está presente.");
    }
}
verificarLetra("A frase de exemplo.");

// 3. slice
function cortarTexto(texto, inicio, fim) {
    console.log(texto.slice(inicio, fim));
}
cortarTexto("Esta é uma notícia importante.", 10, 27);

// 4. concat
function juntarMensagens(msg1, msg2) {
    console.log(msg1.concat(" ", msg2));
}
juntarMensagens("Olá!", "Como você está?");

// 5. replace
function substituirPalavra(frase, antiga, nova) {
    console.log(frase.replace(new RegExp(antiga, 'g'), nova));
}
substituirPalavra("O gato é muito fofo.", "gato", "cachorro");

// 6. split e join
function juntarPalavras(frase) {
    const palavras = frase.split(" ");
    console.log(palavras.join("-"));
}
juntarPalavras("Palavras-chave do produto");

// 7. push e pop
function gerenciarFila() {
    const fila = [];
    for (let i = 1; i <= 5; i++) {
        fila.push(i); // Adiciona senhas
    }
    console.log("Fila inicial:", fila);
    fila.pop(); // Remove a última senha
    console.log("Fila após atendimento:", fila);
}
gerenciarFila();

// 8. shift e unshift
function gerenciarClientes() {
    const clientes = [];
    clientes.unshift("Cliente A"); // Adiciona ao início
    clientes.unshift("Cliente B");
    console.log("Clientes na fila:", clientes);
    clientes.shift(); // Remove o primeiro cliente
    console.log("Clientes após atendimento:", clientes);
}
gerenciarClientes();

// 9. reverse
function inverterLista(lista) {
    console.log(lista.reverse());
}
inverterLista([1, 2, 3, 4, 5]);

// 10. map
function aplicarDesconto(precos) {
    const precosComDesconto = precos.map(preco => preco * 0.9);
    console.log(precosComDesconto);
}
aplicarDesconto([100, 200, 300]);

// 11. filter
function filtrarNotas(notas) {
    const notasAprovadas = notas.filter(nota => nota > 7);
    console.log(notasAprovadas);
}
filtrarNotas([5, 8, 7.5, 6, 9]);

// 12. reduce
function calcularTotal(valores) {
    const total = valores.reduce((acc, valor) => acc + valor, 0);
    console.log("Total:", total);
}
calcularTotal([10, 20, 30]);

// 13. sort
function ordenarLivros(titulos) {
    const titulosOrdenados = titulos.sort();
    console.log(titulosOrdenados);
}
ordenarLivros(["O Senhor dos Anéis", "1984", "Dom Quixote"]);

// 14. Math.random e Math.floor
function gerarNumeroAleatorio() {
    const numero = Math.floor(Math.random() * 101);
    console.log(numero);
}
gerarNumeroAleatorio();

// 15. Object.keys e Object.values
function exibirDadosCliente(cliente) {
    console.log("Campos:", Object.keys(cliente));
    console.log("Dados:", Object.values(cliente));
}
exibirDadosCliente({ nome: "João", idade: 30 });

// 16. this em um objeto
const carro = {
    marca: "Ford",
    modelo: "Fusion",
    ano: 2020,
    detalhes: function() {
        console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`);
    }
};
carro.detalhes();

// 17. this em função construtora
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.detalhes = function() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    };
}
const funcionario = new Pessoa("Maria", 28);
funcionario.detalhes();

// 18. this em classe
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    detalhes() {
        console.log(`Produto: ${this.nome}, Preço: R$${this.preco}`);
    }
}
const produto = new Produto("Cadeira", 150);
produto.detalhes();

// 19. this em setTimeout
const relogio = {
    hora: new Date().toLocaleTimeString(),
    exibirHora: function() {
        setTimeout(() => {
            console.log(`Hora atual: ${this.hora}`);
        }, 1000);
    }
};
relogio.exibirHora();

// 20. this com bind
const usuario = {
    nome: "Carlos",
    email: "carlos@example.com",
    exibirUsuario: function() {
        console.log(`Nome: ${this.nome}, Email: ${this.email}`);
    }
};
const mostrarUsuario = usuario.exibirUsuario.bind(usuario);
mostrarUsuario();

// 21. parseInt
function converterParaInteiro(numero) {
    console.log(parseInt(numero));
}
converterParaInteiro("10.5");

// 22. parseInt em array
function converterArrayParaInteiros(array) {
    const inteiros = array.map(num => parseInt(num));
    console.log(inteiros);
}
converterArrayParaInteiros(["1", "2.5", "3", "4.8"]);

// 23. isNaN
function verificarNumero(valor) {
    if (isNaN(valor)) {
        console.log("Não é um número válido.");
    } else {
        console.log("É um número válido:", valor);
    }
}
verificarNumero("abc");

// 24. isNaN em filtro
function filtrarNumeros(array) {
    const numeros = array.filter(item => !isNaN(item));
    console.log(numeros);
}
filtrarNumeros([1, "dois", 3, "quatro", 5]);

// 25. length
function contarCaracteres(texto) {
    console.log("Total de caracteres:", texto.length);
}
contarCaracteres("Olá, mundo!");

// 26. length em array
function contarAtividades(atividades) {
    console.log("Total de atividades:", atividades.length);
}
contarAtividades(["Tarefa 1", "Tarefa 2", "Tarefa 3"]);

// 27. find
function encontrarClienteVIP(clientes) {
    const clienteVIP = clientes.find(cliente => cliente.saldo > 1000);
    console.log(clienteVIP);
}
encontrarClienteVIP([{ nome: "Ana", saldo: 800 }, { nome: "Luis", saldo: 1200 }]);

// 28. find em produtos
function encontrarProdutoValioso(produtos) {
    const produtoValioso = produtos.find(produto => produto.preco > 100);
    console.log(produtoValioso);
}
encontrarProdutoValioso([{ nome: "Produto A", preco: 50 }, { nome: "Produto B", preco: 150 }]);

// 29. map com operações
function reajustarPrecos(precos) {
    const precosReajustados = precos.map(preco => preco * 2);
    console.log(precosReajustados);
}
reajustarPrecos([10, 20, 30]);

// 30. map para exibir dados
function exibirNomes(alunos) {
    const nomes = alunos.map(aluno => aluno.nome);
    console.log(nomes);
}
exibirNomes([{ nome: "Pedro" }, { nome: "Maria" }, { nome: "João" }]);

let casa = {
    cor: 'white',
    sala: 15,
    cozinha: 10,
    banheiro: 8,
    quarto: 20,
    calcularTamanhoTotalCasaEmM2: function () {
        const tamanhoTotal = this.sala + this.cozinha + this.banheiro + this.quarto;
        console.log(`O tamanho da casa é de ${tamanhoTotal} m²`);
        return tamanhoTotal;
    }
};

casa.calcularTamanhoTotalCasaEmM2();

//--------------------------

let a = 2.000000001;

console.log (a);
console.log (a.toFixed(3));
console.log (a.toString);

//--------------------------

let b = 'texto da aula de metodos';

console.log(b.concat(' que eu já determinei totalmente'));

//--------------------------

let c = 'texto da aula de metodos';

console.log(c.split('da'));

//--------------------------

let d = 'texto da aula de metodos';

console.log(d.split('  '));

//--------------------------

let e = '10110';
console.log(Number.parseInt(e))

//--------------------------

let f = 'texto da aula de metodos';

let g = '10110';
console.log(Number.parseInt(g));
console.log(Number.parseInt());

//--------------------------

let h = 'texto da aula de metodos';

let i = '10110';
console.log(Number.parseInt(i));
console.log(Number.isNaN(Number.parseInt(h)));

//--------------------------

let j = 'texto da aula de metodos';

console.log(j.length)

//--------------------------

const listaNotas = [
    { nome: 'Daniel', nota: 15 },
    { nome: 'Pedro', nota: 5 },
    { nome: 'Fabricio', nota: 16 },
    { nome: 'Izabelle', nota: 18 },
    { nome: 'Nathalia', nota: 20 },
    { nome: 'Amanda', nota: 20 },
    { nome: 'João', nota: 20 },
    { nome: 'Marcus', nota: 12 },
    { nome: 'Sergio', nota: 13 },
    { nome: 'Diego', nota: 14 },
    { nome: 'Renan', nota: 11 },
    { nome: 'Rodrigo', nota: 9 },
    { nome: 'Messi', nota: 0 },
    { nome: 'CR7', nota: 0 }
];

//--------------------------


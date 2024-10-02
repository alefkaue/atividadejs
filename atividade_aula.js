const numeroQueQueroRegistrar = 31472
const stringTemplate = `O número que decidi regitrar foi o ${numeroQueQueroRegistrar}`;
console.log(stringTemplate)

//------------------

const a = 10;
const b = 20;
const stringTemplate1 = `O resultado da soma é ${a+b}`;
console.log(stringTemplate1)

//------------------

const nome = 'Alef';
const idade = 17;
const stringTemplate2 = `Oi, meu nome é ${nome}!
Minha idade é ${idade}`;
console.log(stringTemplate2)

//------------------

const numero1 = 27;
const numero2 = 23.25;
const numero3 = -40;
const total = numero1 + numero2 + numero3;

console.log(total);

//------------------

const valor1 = true;
const valor2 = false;

const valor1Elavor2 = valor1 && valor2;
const valor1OUValor2 = valor1 || valor2;
const inversoValor1 = !valor1;
const inversoValor2 = !valor2;

console.log(valor1Elavor2);
console.log(valor1OUValor2);
console.log(inversoValor1);
console.log(inversoValor2);

//------------------

let x = 2;

console.log(x > 1);
console.log(x > 10);

//------------------

let y="string de teste";

console.log(y==="string de teste");
console.log(y==="novo texto que eu inventei");

//------------------

let y1="string de teste2";

console.log(y!=="novo texto que eu inventei2");

//------------------

let x1 = 2;
let y2 = 'string de teste';

console.log(`01:${x1 > 1}`);
console.log(`02:${x1 > 10}`);

console.log(`03:${y2 === 'string de teste3'}`);
console.log(`04:${y2 !== 'novo texto que inventei3'}`);

console.log(`05:${x >= 2}`);
console.log(`06:${x >= 1}`);
console.log(`07:${x >= 3}`);
console.log(`08:${x <= 3}`);
console.log(`09:${x > 10}`);

//------------------

let valor3 = 2;

console.log(valor3);
console.log(typeof valor3);

//------------------

let valor4

console.log(valor3);
console.log(typeof valor3);

//------------------

let valor5 = undefined;

console.log(valor5);

//------------------

let valor6 = undefined;

console.log(valor6);
console.log(typeof valor6);

//------------------

let valor7 = null;

console.log(valor7);

//------------------

const documentoIdentidade = {
    nome: 'Alef Kauê',
    sobrenome: 'Santos Nunes',
    cpf: '000.000.000-00',
    empresa: 'SENAI103',
    idade: 17,
    };
   console.log(documentoIdentidade);

//------------------

const investimentoMensal = [1000, 2000, 3000, 2000, 1500, 1200, 1300];

console.log(`O valor investido do mês de Janeiro é: ${investimentoMensal[0]}`);
console.log(
    `O valor investido no mês de fevereito é: ${investimentoMensal[1]}`
)
console.log(`O valor investido do mês de Março é: ${investimentoMensal}[3]`);
console.log(`O valor investido do mês de Abril é: ${investimentoMensal}[3]`);
console.log(`O valor investido do mês de Maio é: ${investimentoMensal}[4]`);
console.log(`O valor investido do mês de Junho é: ${investimentoMensal[5]}`);

//------------------


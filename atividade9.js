// Exercício 1: Sistema de Cadastro de Cursos
let curso = "Desenvolvimento de Sistemas";
switch(curso) {
    case "Desenvolvimento de Sistemas":
        console.log("Curso de Desenvolvimento de Sistemas: Duração 2 anos, carga horária de 1600h.");
        break;
    case "Logística":
        console.log("Curso de Logística: Duração 1 ano, carga horária de 1200h.");
        break;
    case "Administração":
        console.log("Curso de Administração: Duração 2 anos, carga horária de 1500h.");
        break;
    default:
        console.log("Curso não encontrado.");
}

// Exercício 2: Calculadora Básica
let num1 = 10;
let num2 = 5;
let operação = "+";
switch(operação) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        if (num2 !== 0) {
            console.log(num1 / num2);
        } else {
            console.log("Erro: Divisão por zero.");
        }
        break;
    default:
        console.log("Operação inválida.");
}

// Exercício 3: Classificação de Idade
let idade = 25;
switch(true) {
    case (idade >= 0 && idade <= 12):
        console.log("Infantil");
        break;
    case (idade >= 13 && idade <= 17):
        console.log("Adolescente");
        break;
    case (idade >= 18 && idade <= 59):
        console.log("Adulto");
        break;
    case (idade >= 60):
        console.log("Idoso");
        break;
    default:
        console.log("Idade inválida.");
}

// Exercício 4: Sistema de Classificação de Notas
let nota = 8;
switch(true) {
    case (nota >= 0 && nota <= 4):
        console.log("Insuficiente");
        break;
    case (nota >= 5 && nota <= 6):
        console.log("Regular");
        break;
    case (nota >= 7 && nota <= 8):
        console.log("Bom");
        break;
    case (nota >= 9 && nota <= 10):
        console.log("Excelente");
        break;
    default:
        console.log("Nota inválida.");
}

// Exercício 5: Simulador de Dias da Semana
let dia = 3;
switch(dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido.");
}

// Exercício 6: Sistema de Mensagens de Eventos
let evento = "Festa Junina";
switch(evento) {
    case "Festa Junina":
        console.log("A Festa Junina acontecerá no dia 25 de junho.");
        break;
    case "Semana de Tecnologia":
        console.log("A Semana de Tecnologia será realizada de 10 a 14 de setembro.");
        break;
    case "Feira de Profissões":
        console.log("A Feira de Profissões será realizada no dia 5 de novembro.");
        break;
    default:
        console.log("Evento não encontrado.");
}

// Exercício 7: Calculadora de Meses do Ano
let mes = 5;
switch(mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Mês inválido.");
}

// Exercício 8: Identificador de Estações do Ano
let estação = 2;
switch(estação) {
    case 1:
        console.log("Verão");
        break;
    case 2:
        console.log("Outono");
        break;
    case 3:
        console.log("Inverno");
        break;
    case 4:
        console.log("Primavera");
        break;
    default:
        console.log("Estação inválida.");
}

// Exercício 9: Conversor de Unidades de Medida
let unidade = "km";
let valor = 5;
switch(unidade) {
    case "cm":
        console.log(valor / 100 + " metros");
        break;
    case "m":
        console.log(valor + " metros");
        break;
    case "km":
        console.log(valor * 1000 + " metros");
        break;
    default:
        console.log("Unidade inválida.");
}

// Exercício 10: Sistema de Notas por Conceitos
let conceito = "B";
switch(conceito) {
    case "A":
        console.log("Nota de 9 a 10");
        break;
    case "B":
        console.log("Nota de 7 a 8.9");
        break;
    case "C":
        console.log("Nota de 5 a 6.9");
        break;
    case "D":
        console.log("Nota de 3 a 4.9");
        break;
    case "F":
        console.log("Nota de 0 a 2.9");
        break;
    default:
        console.log("Conceito inválido.");
}

// Exercício 11: Conversor de Moedas
let moeda = "USD";
let valorReais = 100;
switch(moeda) {
    case "USD":
        console.log(valorReais * 0.19 + " dólares");
        break;
    case "EUR":
        console.log(valorReais * 0.17 + " euros");
        break;
    case "GBP":
        console.log(valorReais * 0.15 + " libras");
        break;
    default:
        console.log("Moeda inválida.");
}

// Exercício 12: Identificador de Tipos de Curso
let tipoCurso = "Técnico";
switch(tipoCurso) {
    case "Técnico":
        console.log("Curso Técnico: Prepara para o mercado de trabalho com habilidades práticas.");
        break;
    case "Superior":
        console.log("Curso Superior: Formação acadêmica avançada em diversas áreas.");
        break;
    case "Extensão":
        console.log("Curso de Extensão: Aperfeiçoamento ou especialização em áreas específicas.");
        break;
    default:
        console.log("Tipo de curso inválido.");
}

// Exercício 13: Sistema de Prioridades
let prioridade = 1;
switch(prioridade) {
    case 1:
        console.log("Alta prioridade");
        break;
    case 2:
        console.log("Média prioridade");
        break;
    case 3:
        console.log("Baixa prioridade");
        break;
    default:
        console.log("Prioridade inválida.");
}

// Exercício 14: Calculadora de IMC
let peso = 70; // em kg
let altura = 1.75; // em metros
let imc = peso / (altura * altura);
switch(true) {
    case (imc < 18.5):
        console.log("Baixo peso");
        break;
    case (imc >= 18.5 && imc < 24.9):
        console.log("Peso normal");
        break;
    case (imc >= 25 && imc < 29.9):
        console.log("Sobrepeso");
        break;
    case (imc >= 30):
        console.log("Obesidade");
        break;
    default:
        console.log("IMC inválido.");
}

// Exercício 15: Classificador de Tipo de Documento
let documento = "CPF";
switch(documento) {
    case "RG":
        console.log("Documento de Identidade");
        break;
    case "CPF":
        console.log("Cadastro de Pessoa Física");
        break;
    case "Passaporte":
        console.log("Documento de Viagem");
        break;
    default:
        console.log("Tipo de documento desconhecido.");
}

// Exercício 16: Sistema de Tarifas de Transporte
let tipoPassageiro = "Estudante";
switch(tipoPassageiro) {
    case "Estudante":
        console.log("Tarifa: R$ 2,00");
        break;
    case "Trabalhador":
        console.log("Tarifa: R$ 4,50");
        break;
    case "Idoso":
        console.log("Tarifa: Gratuita");
        break;
    default:
        console.log("Tipo de passageiro inválido.");
}

// Exercício 17: Classificador de Tempo de Execução
let tempoExecucao = 15; // em segundos
switch(true) {
    case (tempoExecucao <= 5):
        console.log("Rápido");
        break;
    case (tempoExecucao <= 10):
        console.log("Moderado");
        break;
    case (tempoExecucao <= 20):
        console.log("Lento");
        break;
    case (tempoExecucao > 20):
        console.log("Muito Lento");
        break;
    default:
        console.log("Tempo de execução inválido.");
}

// Exercício 18: Sistema de Acessibilidade
let tipoDeficiencia = "Visual";
switch(tipoDeficiencia) {
    case "Visual":
        console.log("Assistência: Leitura de tela, braille.");
        break;
    case "Auditiva":
        console.log("Assistência: Intérprete de libras, legendas.");
        break;
    case "Motora":
        console.log("Assistência: Rampas, cadeira de rodas.");
        break;
    default:
        console.log("Deficiência inválida.");
}

// Exercício 19: Conversor de Notas para Conceitos
let notaNumerica = 85;
switch(true) {
    case (notaNumerica >= 90 && notaNumerica <= 100):
        console.log("Conceito: A");
        break;
    case (notaNumerica >= 80 && notaNumerica < 90):
        console.log("Conceito: B");
        break;
    case (notaNumerica >= 70 && notaNumerica < 80):
        console.log("Conceito: C");
        break;
    case (notaNumerica >= 60 && notaNumerica < 70):
        console.log("Conceito: D");
        break;
    case (notaNumerica < 60):
        console.log("Conceito: F");
        break;
    default:
        console.log("Nota inválida.");
}

// Exercício 20: Simulador de Clima
let clima = "Chuva";
switch(clima) {
    case "Sol":
        console.log("Prepare-se com protetor solar e óculos escuros.");
        break;
    case "Chuva":
        console.log("Leve um guarda-chuva ou capa de chuva.");
        break;
    case "Nublado":
        console.log("Pode chover, leve um guarda-chuva.");
        break;
    default:
        console.log("Clima desconhecido.");
}

// Importa o módulo prompt-sync para permitir entrada de dados pelo usuário no terminal
const prompt = require('prompt-sync')({sigint: true});

// Exibição do menu principal
console.log('|--------|---------------------------|-----------------------------------|');
console.log('|    1   | Classificar Nadador       | Turma x Idade                     |');
console.log('|    2   | Calcular Média            | Média entre 3 notas               |');
console.log('|    3   | Calcular Crédito          | Retorna valor médio e crédito     |');
console.log('|    4   | Calcular Débito Total     | Quant. de produto com valor total |');
console.log('|    5   | Calcular Aumento Salarial | Acréscimo por percentual          |');
console.log('|    6   | Sair                      | Encerrar o programa               |');

// Dicionário (objeto) contendo produtos e seus preços
// Uso de objeto permite acessar o preço pelo código do produto
const produtos = {
    2: 32.00,   // Camisa de Manga
    3: 45.00,   // Caneca
    4: 37.00,   // Bolsa
    5: 32.00,  // Vestido
    6: 45.00    // Bermuda
};

// ------------------- FUNÇÕES DE CADA CASE -------------------

// Case 1 - Classificar nadador
function classificarNadador() {
    let idade = parseInt(prompt('Digite sua idade: ')); // converte string para número inteiro

    // Estrutura condicional if/else para verificar faixas de idade
    if (idade < 5) {
        console.log('Você não se enquadra no perfil!');
    } else if (idade <= 7) {
        console.log('Você faz parte do infantil A');
    } else if (idade <= 10) {
        console.log('Você faz parte do infantil B');
    } else if (idade <= 13) {
        console.log('Você faz parte do juvenil A');
    } else if (idade <= 17) {
        console.log('Você faz parte do juvenil B');
    } else {
        console.log('Você é Adulto(a)');
    }
}

// Case 2 - Calcular média
function calcularMedia() {
    console.log('-= FUNÇÃO MÉDIA DE TRÊS NOTAS =-');
    console.log('| Código | Tipo de Média        |');
    console.log('|--------|----------------------|');
    console.log('| 1      | Aritmética           |');
    console.log('| 2      | Ponderada (3,3,4)    |');
    console.log('| 3      | Harmônica            |');
    console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

    let media = parseInt(prompt("Escolha o tipo de média: "));

    switch (media) { // switch usado para selecionar qual média será calculada
        case 1: // média aritmética
            let nota_01 = parseFloat(prompt('Digite sua primeira nota: '));
            let nota_02 = parseFloat(prompt('Digite sua segunda nota: '));
            let nota_03 = parseFloat(prompt('Digite sua terceira nota: '));

            if (nota_01 >= 0 && nota_02 >=0 && nota_03 >=0) {
                let mediaA = (nota_01 + nota_02 + nota_03) / 3;
                console.log(`Sua média é ${mediaA.toFixed(2)} - ${mediaA < 7 ? 'Reprovado' : 'Aprovado'}`);
            }else{
                console.log("Notas informadas são inválidas. Tente novamente!");
            }
            break;                


        case 2: // média ponderada
            let nota_04 = parseFloat(prompt('Digite sua primeira nota: '));
            let nota_05 = parseFloat(prompt('Digite sua segunda nota: '));
            let nota_06 = parseFloat(prompt('Digite sua terceira nota: '));

            if (nota_04 >= 0 && nota_05 >=0 && nota_06 >=0) {
                let mediaP = (nota_04 * 3 + nota_05 * 3 + nota_06 * 4) / 10;
                console.log(`Sua média é ${mediaP.toFixed(2)} - ${mediaP < 7 ? 'Reprovado' : 'Aprovado'}`);
            }else{
                console.log("Notas informadas são inválidas. Tente novamente!");
            }
            break;              
                

        case 3: // média harmônica
            let nota_07 = parseFloat(prompt('Digite sua primeira nota: '));
            let nota_08 = parseFloat(prompt('Digite sua segunda nota: '));
            let nota_09 = parseFloat(prompt('Digite sua terceira nota: '));

            if (nota_07 >= 0 && nota_08 >=0 && nota_09 >=0) {
                let mediaH = 3 / (1/nota_07 + 1/nota_08 + 1/nota_09);
                console.log(`Sua média é ${mediaH.toFixed(2)} - ${mediaH < 7 ? 'Reprovado' : 'Aprovado'}`);
            }else{
                console.log("Notas informadas são inválidas. Tente novamente!");
            }
            break;              

        default:
            console.log("Opção inválida!");
            break;
    }
}

// Case 3 - Calcular crédito
function calcularCredito() {
    let saldoMedioAno = parseFloat(prompt('Digite o saldo médio do último ano: '));
    let acrescimo = 0;

    if (saldoMedioAno >= 0 && saldoMedioAno <= 200) {
        console.log('Saldo insuficiente para disponibilizar crédito');
    } else if (saldoMedioAno <= 400) {
        acrescimo = saldoMedioAno * 0.2;
    } else if (saldoMedioAno <= 600) {
        acrescimo = saldoMedioAno * 0.3;
    } else {
        acrescimo = saldoMedioAno * 0.4;
    }

    if (acrescimo > 0) {
        console.log(`Crédito disponível de R$ ${acrescimo.toFixed(2)}`);
    }
}

// Case 4 - Calcular débito total de um produto
function calcularDebito() {
    let cod = parseInt(prompt('Escolha um código do MENU (2 a 6): '));
    let quantidade = parseInt(prompt('Digite a quantidade: '));

    if (!produtos[cod]) { // validação do código
        console.log("Código inválido!");
        return; // encerra a função caso seja inválido
    }

    let total = quantidade * produtos[cod];
    console.log(`O valor total referente ao produto é: R$${total.toFixed(2)}`);
}

// Case 5 - Calcular aumento salarial
function calcularAumentoSalarial() {
    let codCargo = parseFloat(prompt('Digite o código do funcionário: 101, 102, 103) ou deixe em branco: '));
    let salarioFuncionario = parseFloat(prompt('Digite o salário do funcionário: '));
    let acrescimoEmPercentual;
    let diferencaEntreSalarios;

    switch (codCargo) {
        case 101:
            acrescimoEmPercentual = salarioFuncionario * 1.1;
            diferencaEntreSalarios = salarioFuncionario * 0.1;
            break;
        case 102:
            acrescimoEmPercentual = salarioFuncionario * 1.2;
            diferencaEntreSalarios = salarioFuncionario * 0.2;
            break;
        case 103:
            acrescimoEmPercentual = salarioFuncionario * 1.3;
            diferencaEntreSalarios = salarioFuncionario * 0.3;
            break;
        default:
            acrescimoEmPercentual = salarioFuncionario * 1.4;
            diferencaEntreSalarios = salarioFuncionario * 0.4;
            console.log('ATENÇÃO: Código inválido ou não informado - reajuste padrão de 40% aplicado');
            break;
    }

    console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
    console.log(`Salário Antigo: R$${salarioFuncionario.toFixed(2)}`);
    console.log(`Salário Novo: R$${acrescimoEmPercentual.toFixed(2)}`);
    console.log(`Valor do Acréscimo: R$${diferencaEntreSalarios.toFixed(2)}`);
}

// ------------------- MENU PRINCIPAL -------------------

// Leitura da opção escolhida pelo usuário
let menu = parseInt(prompt("Escolha uma das opções: "));

// Estrutura switch: decide qual função chamar conforme o valor escolhido
switch (menu) {
    case 1:
        classificarNadador();
        break;
    case 2:
        calcularMedia();
        break;
    case 3:
        calcularCredito();
        break;
    case 4:
        calcularDebito();
        break;
    case 5:
        calcularAumentoSalarial();
        break;
    case 6:
        console.log("Saindo do programa...");
        break;
    default:
        console.log("Opção inválida!");
        break;
}

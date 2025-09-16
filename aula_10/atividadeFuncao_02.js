const prompt = require('prompt-sync')({sigint: true});

console.log('|--------|---------------------------|-----------------------------------|');
console.log('|    1   | Classificar Nadador       | Turma x Idade                     |');
console.log('|    2   | Calcular Média            | Média entre 3 notas               |');
console.log('|    3   | Calcular Crédito          | Retorna valor médio e crédito     |');
console.log('|    4   | Calcular Débito Total     | Quant. de produto com valor total |');
console.log('|    5   | Calcular Aumento Salarial | Acréscimo por percentual          |');
console.log('|    6   | Menu                      | Sair do Menu Principal            |');

// dicionário de produtos (exemplo de preços)
const produtos = {
    2: 50.00,   // Camisa de Manga
    3: 25.00,   // Caneca
    4: 80.00,   // Bolsa
    5: 120.00,  // Vestido
    6: 60.00    // Bermuda
};

let menu = parseInt(prompt("Escolha uma das opções: "));

switch (menu) {

    case 1:
        let idade = parseInt(prompt('Digite sua idade: '));

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
        break;

    case 2:
        console.log('-= FUNÇÃO MÉDIA DE TRÊS NOTAS =-');
        console.log('| Código | Tipo de Média        |');
        console.log('|--------|----------------------|');
        console.log('| 1      | Aritmética           |');
        console.log('| 2      | Ponderada (3,3,4)    |');
        console.log('| 3      | Harmônica            |');
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

        let media = parseInt(prompt("Escolha o tipo de média: "));

        switch (media) {
            case 1:
                let n1 = parseFloat(prompt('Digite sua primeira nota: '));
                let n2 = parseFloat(prompt('Digite sua segunda nota: '));
                let n3 = parseFloat(prompt('Digite sua terceira nota: '));

                if (n1 >= 0 && n1 <= 10 && n2 >= 0 && n2 <= 10 && n3 >= 0 && n3 <= 10) {
                    let mediaA = (n1 + n2 + n3) / 3;
                    console.log(`Sua média é ${mediaA.toFixed(2)} - ${mediaA < 7 ? 'Reprovado' : 'Aprovado'}`);
                } else {
                    console.log("Erro: notas devem estar entre 0 e 10!");
                }
                break;

            case 2:
                let n4 = parseFloat(prompt('Digite sua primeira nota: '));
                let n5 = parseFloat(prompt('Digite sua segunda nota: '));
                let n6 = parseFloat(prompt('Digite sua terceira nota: '));

                if (n4 >= 0 && n4 <= 10 && n5 >= 0 && n5 <= 10 && n6 >= 0 && n6 <= 10) {
                    let mediaP = (n4 * 3 + n5 * 3 + n6 * 4) / 10;
                    console.log(`Sua média é ${mediaP.toFixed(2)} - ${mediaP < 7 ? 'Reprovado' : 'Aprovado'}`);
                } else {
                    console.log("Erro: notas devem estar entre 0 e 10!");
                }
                break;

            case 3:
                let n7 = parseFloat(prompt('Digite sua primeira nota: '));
                let n8 = parseFloat(prompt('Digite sua segunda nota: '));
                let n9 = parseFloat(prompt('Digite sua terceira nota: '));

                if (n7 >= 0 && n7 <= 10 && n8 >= 0 && n8 <= 10 && n9 >= 0 && n9 <= 10) {
                    let mediaH = 3 / (1/n7 + 1/n8 + 1/n9);
                    console.log(`Sua média é ${mediaH.toFixed(2)} - ${mediaH < 7 ? 'Reprovado' : 'Aprovado'}`);
                } else {
                    console.log("Erro: notas devem estar entre 0 e 10!");
                }
                break;

            default:
                console.log("Opção inválida!");
                break;
        }
        break;

    case 3:
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
        calcularCredito();
        break;

    case 4:
        function calcularDebito() {    
            let cod = parseInt(prompt('Escolha um código do MENU (2 a 6): '));
            let quantidade = parseInt(prompt('Digite a quantidade: '));

            if (!produtos[cod]) {
                console.log("Código inválido!");
                return;
            }

            let total = quantidade * produtos[cod];
            console.log(`O valor total referente ao produto é: R$${total.toFixed(2)}`);
            console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
        }
        calcularDebito();
        break;

    case 5:
        let codCargo = parseFloat(prompt('Digite o código do funcionário (101,102,103) ou deixe em branco: '));
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
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
        break;

    default:
        console.log('Sair - Saindo do MENU Principal!');
        break;
}

const prompt = require('prompt-sync')({sigint: true});

console.log('|--------|---------------------------|-----------------------------------|');
console.log('|    1   | Classificar Nadador       | Turma x Idade                     |');
console.log('|    2   | Calcular Média            | Média entre 3 notas               |');
console.log('|    3   | Calcular Crédito          | Retorna valor médio e crédito     |');
console.log('|    4   | Calcular Débito Total     | Quant. de produto com valor total |');
console.log('|    5   | Calcular Aumento Salarial | Acréscimo por percentual          |');
console.log('|    6   | Menu                      | Sair do Menu Principal            |');

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
                console.log("20% do valor do saldo médio");
                acrescimo = saldoMedioAno * 0.2;
            } else if (saldoMedioAno <= 600) {
                console.log("30% do valor do saldo médio");
                acrescimo = saldoMedioAno * 0.3;
            } else {
                console.log("40% do valor do saldo médio");
                acrescimo = saldoMedioAno * 0.4;
            }

            if (acrescimo > 0) {
                console.log(`Crédito disponível de R$ ${acrescimo.toFixed(2)}`);
            }
        }

        calcularCredito(); // <<< aqui chama a função
        break;

    default:
        console.log("Opção inválida!");
        break;
        
    
    
}

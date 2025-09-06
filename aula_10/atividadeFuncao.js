/*Implemente em javaScript um programa que simule um menu interativo no console com 5 opções. Cada opção deve chamar
uma função específica, utilizando condicionais, estruturas de repetição, arrays, matriz e funções, 
conforme enunciado acima. Observação importante: o enunciado de cada função está no PDF anexado dentro da pasta "aula_10" */


const prompt = require('prompt-sync')({sigint: true});

console.log("==--==--==--==--==FUNÇÕES==--==--==--==--==");
console.log("==--==--==--==--==--==MENU==--==--==--==--==--==");
console.log("[1] Funcão Idade");
console.log("[2] Funcão Média");
console.log("[3] Funcão Crédito");
console.log("[4] Função Preço");
console.log("[5] Função Salário");
console.log("[6] Sair");

let menu = parseInt(prompt("Escolha uma das opções: "));

switch (menu) {

    case 1:
        let idade = parseInt(prompt('Digite sua idade: '));

        if (idade < 5) {
            console.log('Você não se enquadra no perfil!');
        }
        if (5 <= idade && idade <= 7) {
            console.log('Você faz parte do infantil A');
        }
        else if (8 <= idade && idade <= 10) {
            console.log('Você faz parte do infantil B');
        }
        else if (11 <= idade && idade <= 13) {
            console.log('Você faz parte do juvenil A');
        }         
        else if (14 <= idade && idade <= 17) {
            console.log('Você faz parte do juvenil B');
        }              
        else if (18 <= idade) {
            console.log('Você é Adulto(a)');
        }    
        break;
        
    case 2:
        console.log("[1] Média Aritimética");
        console.log("[2] Média Ponderada");
        console.log("[3] Média harmônica");

        let media = parseInt(prompt("Escolha o tipo de média: "));

        switch (media) {
            case 1:        
                let nota_01 = parseInt(prompt('Digite sua primeira nota: '));
                let nota_02 = parseInt(prompt('Digite sua segunda nota: '));
                let nota_03 = parseInt(prompt('Digite sua terceira nota: '));

                let mediaA = (nota_01 + nota_02 + nota_03) / 3;

                if (mediaA < 7) {
                    console.log('Sua média é igual a: '+ mediaA.toFixed(2) +" e você está reprovado!"); 
                }
                else if (7 <= mediaA) {
                    console.log('Sua média é igual a: '+ mediaA.toFixed(2) +" e você está aprovado!"); 
                }
                    
                    
                    
            case 2:
                let nota_04 = parseInt(prompt('Digite sua primeira nota: '));
                let nota_05 = parseInt(prompt('Digite sua segunda nota: '));
                let nota_06 = parseInt(prompt('Digite sua terceira nota: '));                

                const peso = (nota_04 * 3) + (nota_05 * 3) + (nota_06 * 4);
                let mediaP = (peso / 10);

        break;
    }

        


    /*case 3:
        let nota_04 = parseInt(prompt('Digite sua primeira nota: '));
        let nota_05 = parseInt(prompt('Digite sua segunda nota: '));
        let nota_06 = parseInt(prompt('Digite sua primeira nota: '));

        mediaP = (nota_04 + nota_05 + nota_06) / 3;


        
        break;
    case 'outono':
        console.log('Estamos no outono!');
        break;
    case 'primavera':
        console.log('Estamos na primavera!');
        break;
    default:
        console.log('Esta estação do ano não existe!')
        break;
        
        


    case 4:
        console.log('Estamos no outono!');
        break;



    case 5:
        console.log('Estamos na primavera!');
        break;



    case 6:
        console.log('Estamos na primavera!');
        break; */


    default:
        console.log('Error - Digite uma opção válida!')
        break;


} 


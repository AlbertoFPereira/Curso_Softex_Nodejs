/*Implemente em javaScript um programa que simule um menu interativo no console com 5 opções. Cada opção deve chamar
uma função específica, utilizando condicionais, estruturas de repetição, arrays, matriz e funções, 
conforme enunciado acima. Observação importante: o enunciado de cada função está no PDF anexado dentro da pasta "aula_10" */

//chamando a biblioteca prompt-sync para gerar os prompts
const prompt = require('prompt-sync')({sigint: true});

//Chama o menu principal 
console.log('|--------|---------------------------|-----------------------------------|');
console.log('|    1   | Classificar Nadador       | Turma x Idade                     |');
console.log('|    2   | Calcular Média            | Média entre 3 notas               |');
console.log('|    3   | Calcular Crédito          | Retorna valor médio e crédito     |');
console.log('|    4   | Calcular Débito Total     | Quant. de produto com valor total |');
console.log('|    5   | Calcular Aumento Salarial | Acrércimo por percentual          |');
console.log('|    6   | Menu                      | Sair do Menu Principal            |');


//Usuário escolhe uma opção
let menu = parseInt(prompt("Escolha uma das opções: "));


switch (menu) {

    //Coleta a idade do usuário 
    case 1:
        let idade = parseInt(prompt('Digite sua idade: '));

        //Verificação da idade informada pelo usuário e classificação da sua categoria
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


    //Chama o menu "Média"    
    case 2:
        console.log('-= FUNÇÃO MÉDIA DE TRÊS NOTAS -=-');
        console.log('| Código | Cargo                |');
        console.log('|--------|----------------------|');
        console.log('| 1      | Aritimética          |');
        console.log('| 2      | Ponderada (3,3,4)    |');
        console.log('| 3      | Hamônica             |');
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

        let media = parseInt(prompt("Escolha o tipo de média: "));


        //Verificação das 3 notas informadas pelo usuário / Cálcula da média / Status Aprovado / Reprovado
        switch (media) {

            //Colate da notas (Média Aritimética)
            case 1:        
                let nota_01 = parseInt(prompt('Digite sua primeira nota: '));
                let nota_02 = parseInt(prompt('Digite sua segunda nota: '));
                let nota_03 = parseInt(prompt('Digite sua terceira nota: '));

                //Valida se as notas não são negativas
                if (nota_01 >= 0 && nota_01 <= 10 && nota_02 >= 0 && nota_02 <= 10 && nota_03 >= 0 && nota_03 <= 10) {
                    let mediaA = (nota_01 + nota_02 + nota_03) / 3;

                    if (mediaA < 7) {
                        console.log('Sua média é igual a: '+ mediaA.toFixed(2) +" e você está reprovado!"); 
                    } else if (7 <= mediaA) {
                        console.log('Sua média é igual a: '+ mediaA.toFixed(2) +" e você está aprovado!"); 
                        }
                    } else {
                    console.log("Error - Notas devem conter apenas números de 0 a 10!")
                     }    
                break; 
            
            //Colate da notas (Média Ponderada)
            case 2:
                let nota_04 = parseInt(prompt('Digite sua primeira nota: '));
                let nota_05 = parseInt(prompt('Digite sua segunda nota: '));
                let nota_06 = parseInt(prompt('Digite sua terceira nota: '));
               
                //Valida se as notas não são negativas
                if (nota_04 >= 0 && nota_04 <= 10 && nota_05 >= 0 && nota_05 <= 10 && nota_06 >= 0 && nota_06 <= 10) {
                   
                    let mediaP = (nota_04 * 3 + nota_05 * 3 + nota_06 * 4) / (3 + 3 + 4);

                    if (mediaP < 7) {
                        console.log('Sua média é igual a: '+ mediaP.toFixed(2) +" e você está reprovado!"); 
                    } else if (7 <= mediaP) {
                        console.log('Sua média é igual a: '+ mediaP.toFixed(2) +" e você está aprovado!"); 
                    }
                } else {
                console.log("Error - Notas devem conter apenas números de 0 a 10!")               
                }
                break;
                    
            //Colate da notas (Média Harmônica)
            case 3:
                 let nota_07 = parseInt(prompt('Digite sua primeira nota: '));
                 let nota_08 = parseInt(prompt('Digite sua segunda nota: '));
                 let nota_09 = parseInt(prompt('Digite sua primeira nota: '));
            
                //Valida se as notas não são negativas 
                if (nota_07 >= 0 && nota_07 <= 10 && nota_08 >= 0 && nota_08 <= 10 && nota_09 >= 0 && nota_09 <= 10) {
                    let mediaH = 3 / (1 / nota_07 + 1 / nota_08 + 1 / nota_09);
                    if (mediaH < 7) {
                        console.log('Sua média é igual a: '+ mediaH.toFixed(2) +" e você está reprovado!"); 
                    } else if (7 <= mediaH) {
                        console.log('Sua média é igual a: '+ mediaH.toFixed(2) +" e você está aprovado!"); 
                    }else {
                console.log("Error - Notas devem conter apenas números de 0 a 10!")                      
                }
                break;
        }

    //função valida se o cliente tem saldo para ter acesso a crédito    
    case 3:
        function calcularCredito() {
        let nun = parseInt(prompt('Digite um número: '))
        console.log('Débito')
        let saldoMedioAno = parseInt(prompt('Digite o saldo médio do último ano: '))    
        let acrescimo; 

        //validação quanto ao saldo e os retornos caso passe
         if (saldoMedioAno >= 0 && saldoMedioAno <= 200) {
        console.log('Saldo insuficiente para disponibilizar crédito');
          } else if (saldoMedioAno >= 201 && saldoMedioAno <= 400) {
        acrescimo = saldoMedioAno * 0.2;
        console.log(`Crédito disponível de R$ ${acrescimo.toFixed(2)}`);
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
        } else if (saldoMedioAno > 400 && saldoMedioAno <= 600) {
        acrescimo = saldoMedioAno * 0.3;
        console.log(`Crédito disponível de R$ ${acrescimo.toFixed(2)}`);
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
        } else {
        acrescimo = saldoMedioAno * 0.4;
        console.log(`Crédito disponível de R$ ${acrescimo.toFixed(2)}`);
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
        }         
    }
    break;        

    //função para calcular o débito de compra do cliente
    case 4:
        function calcularDebido() {    
        let menu = parseInt(prompt('Escolha um código do MENU: '));
        let quantidade = parseInt(prompt('Digite a quantidade: '));
        let total;

        switch (menu) {
            case 2:
                //multiplicação da quantidade do produto com o produto do dicionário
                let totalCod2 = quantidade * produtos[2];
                console.log(`O valor total referente ao produro (Camisa de Manga) é: R$${totalCod2.toFixed(2)}`);
                total = quantidade * produtos[2];
                console.log(`O valor total referente ao produro (Camisa de Manga) é: R$${total.toFixed(2)}`);
                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
                break;
             
            case 3:
                //multiplicação da quantidade do produto com o produto do dicionário
                let totalCod3 = quantidade * produtos[3];
                console.log(`O valor total referente ao produro (Caneca) é: R$${totalCod3.toFixed(2)}`);
                total = quantidade * produtos[3];
                console.log(`O valor total referente ao produro (Caneca) é: R$${total.toFixed(2)}`);
                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
                break;

            case 4:
                //multiplicação da quantidade do produto com o produto do dicionário
                let totalCod4 = quantidade * produtos[4];
                console.log(`O valor total referente ao produro (Bolsa) é: R$${totalCod4.toFixed(2)}`);
                total = quantidade * produtos[4];
                console.log(`O valor total referente ao produro (Bolsa) é: R$${total.toFixed(2)}`);
                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
                break;
                
            case 5:
                //multiplicação da quantidade do produto com o produto do dicionário
                let totalCod5 = quantidade * produtos[5];
                console.log(`O valor total referente ao produro (Vestido) é: R$${totalCod5.toFixed(2)}`);
                total = quantidade * produtos[5];
                console.log(`O valor total referente ao produro (Vestido) é: R$${total.toFixed(2)}`);
                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
                break;

            case 6:
                //multiplicação da quantidade do produto com o produto do dicionário
                let totalCod6 = quantidade * produtos[6];
                console.log(`O valor total referente ao produro (Bermuda) é: R$${totalCod6.toFixed(2)}`);
                total = quantidade * produtos[6];
                console.log(`O valor total referente ao produro (Bermuda) é: R$${total.toFixed(2)}`);
                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
                break;
                            

    //capitura do código do cardo e salário do funcionário
    case 5:
        let codCargo = parseFloat(prompt('Digite o código do funcionário ou deixe em branco: '));
        let salarioFuncionario = parseFloat(prompt('Digite o salário do funcionário: '));
        let acrescimoEmPercentual;
        let diferencaEntreSalarios;

        switch (codCargo) {
            case 101:
                //calculo e retorno
                let acrescimoEmPercentual10 = (salarioFuncionario * 0.1) + salarioFuncionario;
                let diferencaEntreSalarios10 = acrescimoEmPercentual10 - salarioFuncionario;
                acrescimoEmPercentual = (salarioFuncionario * 0.1) + salarioFuncionario;
                diferencaEntreSalarios = acrescimoEmPercentual - salarioFuncionario;
                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
                console.log(`Salário Antigo: R$${salarioFuncionario.toFixed(2)}`);
                console.log(`Salário Novo R$${acrescimoEmPercentual10.toFixed(2)}`);
                console.log(`Valor do Acrescimo R$${diferencaEntreSalarios10.toFixed(2)}`);
                console.log(`Salário Novo R$${acrescimoEmPercentual.toFixed(2)}`);
                console.log(`Valor do Acrescimo R$${diferencaEntreSalarios.toFixed(2)}`);
                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
                break;

            case 102:
                //calculo e retorno
                let acrescimoEmPercentual20 = (salarioFuncionario * 0.2) + salarioFuncionario;
                let diferencaEntreSalarios20 = acrescimoEmPercentual20 - salarioFuncionario;
                acrescimoEmPercentual = (salarioFuncionario * 0.2) + salarioFuncionario;
                diferencaEntreSalarios = acrescimoEmPercentual - salarioFuncionario;
                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
                console.log(`Salário Antigo: R$${salarioFuncionario.toFixed(2)}`);
                console.log(`Salário Novo R$${acrescimoEmPercentual20.toFixed(2)}`);
                console.log(`Valor do Acrescimo R$${diferencaEntreSalarios20.toFixed(2)}`);
                console.log(`Salário Novo R$${acrescimoEmPercentual.toFixed(2)}`);
                console.log(`Valor do Acrescimo R$${diferencaEntreSalarios.toFixed(2)}`);
                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
                break;

            case 103:
                //calculo e retorno
                let acrescimoEmPercentual30 = (salarioFuncionario * 0.3) + salarioFuncionario;
                let diferencaEntreSalarios30 = acrescimoEmPercentual30 - salarioFuncionario;
                acrescimoEmPercentual = (salarioFuncionario * 0.3) + salarioFuncionario;
                diferencaEntreSalarios = acrescimoEmPercentual - salarioFuncionario;
                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
                console.log(`Salário Antigo: R$${salarioFuncionario.toFixed(2)}`);
                console.log(`Salário Novo R$${acrescimoEmPercentual30.toFixed(2)}`);
                console.log(`Valor do Acrescimo R$${diferencaEntreSalarios30.toFixed(2)}`);
                console.log(`Salário Novo R$${acrescimoEmPercentual.toFixed(2)}`);
                console.log(`Valor do Acrescimo R$${diferencaEntreSalarios.toFixed(2)}`);
                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
                break;

        default:
            //calculo e retorno
            let acrescimoEmPercentual40 = (salarioFuncionario * 0.4) + salarioFuncionario;
            let diferencaEntreSalarios40 = acrescimoEmPercentual40 - salarioFuncionario;
            acrescimoEmPercentual = (salarioFuncionario * 0.4) + salarioFuncionario;
            diferencaEntreSalarios = acrescimoEmPercentual - salarioFuncionario;
            //a ausência de dados em código ou a digitação errônea retornará o cálculo de 40$
            console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
            console.log('ATENÇÃO: Código do funcionário não informado - Aplicado reajuste padrão de 40%')
            console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
            console.log(`Salário Antigo: R$${salarioFuncionario.toFixed(2)}`);
            console.log(`Salário Novo R$${acrescimoEmPercentual40.toFixed(2)}`);
            console.log(`Valor do Acrescimo R$${diferencaEntreSalarios40.toFixed(2)}`);
            console.log(`Salário Novo R$${acrescimoEmPercentual.toFixed(2)}`);
            console.log(`Valor do Acrescimo R$${diferencaEntreSalarios.toFixed(2)}`);
            console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
            break;           
        }
    default:
        console.log('Sair - Saindo do MENU Principal!')
        break;
        }
    }
        }
}
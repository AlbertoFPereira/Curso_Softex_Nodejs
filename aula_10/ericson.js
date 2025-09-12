//chamando a biblioteca prompt-sync para gerar os prompts
const prompt = require('prompt-sync') ([singint=true]);

//para que o while funcione a variável tem que estar fora do loop
let menu;

//função que chama o menu principal, reduz a repetição de código 
menuInicial();

//criando o loop infinito através do "do while"
do {
    //prompt principal relacionado ao menu    
    menu = parseInt(prompt('Para reimprimir o MENU(6) ou SAIR(7) | Escolha um código do MENU: '));
    console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

    //utilizando o "switch" para gerenciar o MENU, objetivo é que cada CASE chame uma função entre as oções de 1 à 7
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
            calcularDebido();
            break;

        case 5:
            calcularAumento();
            break;

        case 6:
            menuInicial();
            break;

        case 7:
            console.log('=-=-=-=-Obrigado por utilizar nosso sistema. Volte Sempre!=-=-=-=-=');
            console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
            break;

        default:
            console.log('Error - Digita um código válido');
            break;
    }

//condicional do "do while" para sair do loop infinito
} while (menu != 7);

//função de classificação de nadador por idade
function classificarNadador() {
    //variável de coleta da idade   
    let idade = parseInt(prompt('Digite a idade do nadador: '));

    //primeiro if de verificação para menores de 4 anos ou números negativos
    if (idade <= 4) {
        console.log('Nadador não tem idade suficiente!');
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
    } 
    else if (idade >= 5 && idade <= 7) {
        console.log('Nadador pertence ao INFANTIL A');
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
    } 
    else if (idade >= 8 && idade <= 10) {
        console.log('Nadador pertence ao INFANTIL B');
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
    } 
    else if (idade >= 11 && idade <= 13) {
        console.log('Nadador pertence ao JUVENIL A');
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
    } 
    else if (idade >= 14 && idade <= 17) {
        console.log('Nadador pertence ao JUVENIL B');
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
    } 
    else if (idade >= 18) {
        console.log('Nadador é MAIOR de 18 anos.');
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
    } 
    else {
        //tratamento de entrada inválida como strings
        console.log('Error - Digite um valor válido!');
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
    }
}

//função para cálculo da média com menu de escolha de duas opções
function calcularMedia() {
    //menu principal da função com legenda de opções de escolha
    console.log('-= FUNÇÃO MÉDIA DE TRÊS NOTAS -=-');
    console.log('| Código | Cargo                |');
    console.log('|--------|----------------------|');
    console.log('| 1      | Aritimética          |');
    console.log('| 2      | Ponderada (3,3,4)    |');
    console.log('| 3      | Hamônica             |');
    console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

    //variável relacionada ao menu
    let menu = parseInt(prompt('Escolha um código do MENU:  '));

    //variáveis de coleta das notas
    let nota1 = parseInt(prompt('Digite a primeira nota: '));
    let nota2 = parseInt(prompt('Digite a segunda nota: '));
    let nota3 = parseInt(prompt('Digite a terceira nota: '));

    //switch que relaciona a variável menu com as opçoes escolhidas entre 1, 2 e 3
    switch (menu) {
        case 1:
            //if de validação entre os número 0 à 10, caso digitado string ou outro número apresente erro
            if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10 && nota3 >= 0 && nota3 <= 10) {
                //formula e retorno
                let mediaAritmetica = (nota1 + nota2 + nota3) / 3;
                console.log(`A média Aritimética das três notas é: ${mediaAritmetica.toFixed(2)}`);
                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
            } else {
                console.log('Error - Notas devem conter apenas números de 0 a 10!')
            }
            break;

        case 2:
            //if de validação entre os número 0 à 10, caso digitado string ou outro número apresente erro
            if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10 && nota3 >= 0 && nota3 <= 10) {
                //formula e retorno
                let mediaPonderada = (nota1 * 3 + nota2 * 3 + nota3 * 4) / (3 + 3 + 4);
                console.log(`A média Ponderada(pesos 3,3,4) das três notas é: ${mediaPonderada.toFixed(2)}`);
                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
            } else {
                console.log('Error - Notas devem conter apenas números de 0 a 10!')
            }
            break;

        case 3:
            //if de validação entre os número 0 à 10, caso digitado string ou outro número apresente erro
            if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10 && nota3 >= 0 && nota3 <= 10) {
                //formula e retorno
                let mediaHamonica = 3 / (1 / nota1 + 1 / nota2 + 1 / nota3);
                console.log(`A média Harmônica das três notas é: ${mediaHamonica.toFixed(2)}`);
                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
            } else {
                console.log('Error - Notas devem conter apenas números de 0 a 10!')
            }
            break;

        default:
            //validando códigos digitados erradamente no submenu
            console.log('Error - Digita um código válido');
            break;
    }
}

//função valida se o cliente tem saldo para ter acesso a crédito
function calcularCredito() {
    let nun = parseInt(prompt('Digite um número: '))
    console.log('Débito')
    //recebe o saldo do cliente
    let saldoMedioAno = parseInt(prompt('Digite o saldo médio do último ano: '))
    //variável de movimentação dos dados dentro do if
    let acrescimo; 

    //validação quanto ao saldo e os retornos caso passe
    if (saldoMedioAno >= 0 && saldoMedioAno <= 200) {
        console.log('Saldo insuficiente para disponibilizar crédito');
    } else if (saldoMedioAno >= 201 && saldoMedioAno <= 400) {
        acrescimo = saldoMedioAno * 0.2;
        console.log(`Crédito disponível de R$ ${acrescimo.toFixed(2)}`);
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
    } else if (saldoMedioAno >= 401 && saldoMedioAno <= 600) {
        acrescimo = saldoMedioAno * 0.3;
        console.log(`Crédito disponível de R$ ${acrescimo.toFixed(2)}`);
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
    } else {
        acrescimo = saldoMedioAno * 0.4;
        console.log(`Crédito disponível de R$ ${acrescimo.toFixed(2)}`);
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
    }      
   
}

//função para calcular o débito de compra do cliente
function calcularDebido() {
    //menu principal da função com legenda de opções de escolha
@@ -176,40 +197,41 @@
    //interação com o menu e captura da quantidade
    let menu = parseInt(prompt('Escolha um código do MENU: '));
    let quantidade = parseInt(prompt('Digite a quantidade: '));
    let total;

    switch (menu){
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

@@ -235,53 +257,56 @@
    //capitura do código do cardo e salário do funcionário
    let codCargo = parseFloat(prompt('Digite o código do funcionário ou deixe em branco: '));
    let salarioFuncionario = parseFloat(prompt('Digite o salário do funcionário: '));
    //variáveis que dão suporte as que estão dentro dos case
    let acrescimoEmPercentual;
    let diferencaEntreSalarios;

    //interação com o submenu através do switch 
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
@@ -296,7 +321,7 @@
    console.log('|--------|---------------------------|-----------------------------------|');
    console.log('|    1   | Classificar Nadador       | Turma x Idade                     |');
    console.log('|    2   | Calcular Média            | Média entre 3 notas               |');
    console.log('|    3   | Calcular Cérdito          | Retorna valor médio e crédito     |');
    console.log('|    3   | Calcular Crédito          | Retorna valor médio e crédito     |');
    console.log('|    4   | Calcular Débito Total     | Quant. de produto com valor total |');
    console.log('|    5   | Calcular Aumento Salarial | Acrércimo por percentual          |');
    console.log('|    6   | Menu                      | Impressão do Menu                 |');
// Crie 4 funções que recebam 2 números e retorne a soma, a subtração a multiplicação e a divisão.
// Atenção ao segundo número não ser zero para efetuar a divisão, caso seja represente esta
// restrição na função de divisão. 
// Peça dois números ao usuário e peça qual operação matemática deseja fazer e mostre o resultado.


const prompt = require('prompt-sync')({singint: true});

console.log("==--==--==--==--==CALCULADORA==--==--==--==--==");
console.log("==--==--==--==--==--==MENU==--==--==--==--==--==");
console.log("[1] Somar");
console.log("[2] Subtrair");
console.log("[3] Multiplicar");
console.log("[4] Dividir");
console.log("[5] Sair");


while (true) {
    let menu = parseInt(prompt ("Escolha uma operção do Menu: "));
    if (menu == 5) {
        break    
    } 
    
    else if (menu == 1) {
        console.log("Somar");
        
        let numero_1 = parseInt(prompt ("Digite o primeiro número: "));
        let numero_2 = parseInt(prompt("Digite o segundo número: "));
        let soma = (numero_1 + numero_2);
        console.log(soma)
    }

    let subtracao = (numero_1 - numero_2);
    let multiplicacao = (numero_1 * numero_2);

    
}
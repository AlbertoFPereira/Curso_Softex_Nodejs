/* 💳 Exercício 2 – Conta Bancária
Objetivo: Trabalhar com atributos que mudam e métodos que validam regras.

Roteiro:
Crie a classe ContaBancaria com atributos: titular, saldo.

Crie métodos:
depositar(valor) → adiciona ao saldo.
sacar(valor) → se houver saldo suficiente, subtrai; senão, mostra mensagem de erro.
mostrarSaldo() → exibe o saldo atual.
Crie uma conta com saldo inicial de R$1000.

Faça:
um depósito de R$500.
um saque de R$200.
um saque maior que o saldo para testar a regra. */



// Definição da classe ContaBancaria
class ContaBancaria{
    constructor(titular,saldo){
        this.titular = titular;
        this.saldo = saldo;        
    }


    // Depositar dinheiro na conta
    depositar(valor){
        this.saldo += valor;
        console.log(`Foi depositado em sua conta, ${this.titular}, o valor de R$${valor}.`);
    }

    //Sacar dinheiro da conta
    sacar(valor){           
        if (valor <= this.saldo){
            this.saldo -= valor;
            console.log(`Foi sacado da sua conta, ${this.titular}, o valor de ${valor}.`);
        } else{
            console.log(`Seu saldo é insuficiente para realização do saque solicitado de ${valor}!`);            
        }
    }

    //mostrar o saldo atual
    mostrarSaldo(){
        console.log(`Seu saldo atual,${this.titular}, é de ${this.saldo}.`)
    } 

}

let conta1 = new ContaBancaria("Alberto", 1000);
let conta2 = new ContaBancaria("Ericson",5000);

console.log("-----------------------------------");
console.log("Conta de Alberto");

conta1.mostrarSaldo();
conta1.depositar(500);
conta1.mostrarSaldo();
conta1.sacar(2000);
conta1.mostrarSaldo();
conta1.sacar(200);
conta1.mostrarSaldo();

console.log("-----------------------------------");
console.log("Conta de Ericson");

conta2.mostrarSaldo();






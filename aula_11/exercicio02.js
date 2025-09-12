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


class ContaBancaria{
    constructor(titular,saldo){
        this.titular = titular;
        this.saldo = saldo;        
    }

    depositar(valor){
        this.saldo += valor;
        console.log(`Foi depositado em sua conta, ${this.titular}, o valor de ${valor}. Seu saldo agora é de ${this.saldo}.`);
    }

    sacar(valor){           
        if (valor <= saldo){
            this.saldo -= valor;
            console.log(`Foi sacado da sua conta, ${this.titular}, o valor de ${valor}, e seu saldo agora é de ${this.saldo}`);
        }
        else if (valor > saldo){
            console.log("Seu saldo é insuficiente!");            
        }
    }

}

let conta1 = new ContaBancaria("Alberto", 1000);
console.log(conta1);
conta1.depositar(500)
console.log(conta1);

conta1.sacar(200);
console.log(conta1);
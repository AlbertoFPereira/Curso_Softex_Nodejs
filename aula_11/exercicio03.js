/*📘 Exercício 3 – Estacionamento

Objetivo: Simular vários objetos interagindo.

Roteiro:
1 - Crie a classe Carro com atributos: placa, cor;

2 - Crie a classe Estacionamento com:
a)atributo vagas (um array vazio).

3 - Métodos:
a) adicionarCarro(carro) → adiciona o carro ao array;
b) listarCarros() → mostra todos os carros estacionados.

4 - Crie 3 objetos Carro;

5 - Crie um objeto estacionamento e adicione os carros;

6- Liste os carros estacionados no console. */


//Criação de Classe "Carro"
class Carro {
    constructor(placa, cor) {
        this.placa = placa;
        this.cor = cor;
    }
}

//Criação de classe "Estacionamento"
class Estacionamento {
    constructor() {
        this.vagas = [];
    }

    adicionarCarro(carro){
        this.vagas.push(carro);
    }

//adiciona o carro ao array
    listarCarros(){
        for (let i = 0; i < this.vagas.length; i++) {
            const carro = this.vagas[i];            
            console.log(`${i+1}. Placa: ${carro.placa}, Cor: ${carro.cor}`);
        }
    }
        
}

//Criação de 3 objetos "carro"
let carro1 = new Carro ("PLH - 123", "Branca");
let carro2 = new Carro ("OPG - 456", "Preto");
let carro3 = new Carro ("TBH - 789", "Vermelho");

let estacionamento = new Estacionamento()

estacionamento.adicionarCarro(carro1);
estacionamento.adicionarCarro(carro2);
estacionamento.adicionarCarro(carro3);


//Listar os carros estacionados no console
estacionamento.listarCarros();




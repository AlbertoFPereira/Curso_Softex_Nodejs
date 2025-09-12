/* Exercício 1 – Criando um Carro

Objetivo: Praticar atributos e métodos básicos.

Roteiro:

1. Crie uma classe "Carro" com os atributos: marca, cor, ano, velocidade.

2. No construtor, inicialize a "velocidade" com 0.

3. Adicione os métodos:

   acelerar() → aumenta a velocidade em 10.
   frear() → diminui a velocidade em 10.
   mostrarInfo() → mostra marca, cor, ano e velocidade no console.

4. Crie dois objetos da classe "Carro".

5. Faça um carro acelerar e outro frear, mostrando o estado deles.
 */



//Definição de Classe

class Carro{
constructor(marca, cor, ano){

   this.marca = marca;
   this.cor = cor;
   this.ano = ano;
   this.velocidade = 0;
}
   acelerar(){
      this.velocidade += 10;
      console.log(`A ${this.marca} acelerou. Velocidade: ${this.velocidade} Km/h`);
   }
   frear(){
      this.velocidade -= 10;
      console.log(`O ${this.marca} freou. Velocidade: ${this.velocidade} Km/h`);
    }
   mostrarInfo(){
      console.log(`A ${this.marca}, de cor ${this.cor}, e ano ${this.ano}, acelerou ${this.velocidade} Km/h`);
   } 
}
   

//Criando objetos
let carro1 = new Carro("BMW", "Branca", "2025");
let carro2 = new Carro("Fusca", "Amarelo", "1985");

carro1.acelerar();
carro2.frear();
carro1.mostrarInfo();

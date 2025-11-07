/*📘 Exercício – Estoque - Vendas 

 1 - Criar um programa de vendo de 3 produtos (camiseta, shot e bone), onde o usuário possa contrar
 os produtos de forma independentes entre si. 

 2 - Validar se tem o produto no estoque;

 3 - Dizer o valor total; */


//Criação de Classe "Estoque"
class Estoque {
  constructor() {
    // Cada produto é um objeto com nome, preço e estoque inicial de 100 unidades
    this.camiseta = {nome: string, preco: number, estoque: number};
    this.short = {nome: string, preco: number, estoque: number};
    this.perfume = {nome: string, preco: number, estoque: number};
  }

    if (this.camiseta < 1) {
        console.log ("Não temos camisetas em esetoque.");        
    }

    
    
}


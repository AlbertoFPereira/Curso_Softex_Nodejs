/*2) Faça um programa que receba três notas e calcule a média aritmética.
Depois: 

•Mostre "Aprovado" se média ≥ 7
•"Recuperação" se 5 ≤ média < 7
•"Reprovado" se média < 5*/

const prompt = require('prompt-sync')({singint: true});

let nota1 = prompt('Digite a primeira nota:');
let nota2 = prompt('Digite a segunda nota:');
let nota3 = prompt('Digite a terceira nota:')
let media = (nota1 + nota2 + nota3)/3;

if (media>=7) {
    console.log('Aprovado');
}
    else if (5 < media && media < 7) {
        console.log('Recuperação')
        
    }
    else {
        console.log("Reprovado")
    }
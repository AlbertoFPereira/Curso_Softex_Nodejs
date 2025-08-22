/*1) Escreva um programa que leia três números e determine qual é o
maior e qual é o menor deles.*/

const prompt = require('prompt-sync')({singint: true});

let numero1 = prompt('Digite o primeiro número:');
let numero2 = prompt('Digite o segundo número:');
let numero3 = prompt('Digite o terceiro número:');

if (numero1>numero2 && numero1>numero3){
    console.log('O maior número é: '+numero1);
}

    else if (numero2>numero1 && numero2>numero3){
    console.log('O maior número é: '+numero2);
    }
        
    else {
        console.log('O maior número é: '+numero3)
    }

if (numero1<numero2 && numero1<numero3){
    console.log('O menor numero é: '+numero1);}

    else if (numero2<numero1 && numero2<numero3) {
        console.log('O menor numero é '+numero2);}
        
    else{
        console.log('O menor número é '+numero3);
    }
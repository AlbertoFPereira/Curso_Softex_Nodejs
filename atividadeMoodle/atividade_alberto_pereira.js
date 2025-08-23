/*Imagine que você foi contratado para desenvolver um sistema simples de saúde em uma clínica. 
O sistema deve ajudar médicos a calcular o IMC de pacientes para orientar sobre o risco de doenças relacionadas ao peso.
Escreva um programa em JavaScript que:


1 - Leia a altura (em metros) e o peso (em kg) de uma pessoa;
2 - Calcule o IMC;
3 - Mostre na tela o valor do IMC e a classificação correspondente.
Exemplo real: Um paciente com altura de 1.75 m e peso de 85 kg deve ter seu IMC calculado e receber a mensagem adequada (de acordo com a classificação acima).


Índice de Massa Corporal (IMC): IMC = peso / (altura * altura)
A classificação é feita da seguinte forma:

IMC < 18.5 → Abaixo do peso
18.5 ≤ IMC < 24.9 → Peso normal
25 ≤ IMC < 29.9 → Sobrepeso
IMC ≥ 30 → Obesidade    
*/


const prompt = require('prompt-sync')({sigint: true});

let altura = parseFloat(prompt('Digite sua altura em metros: '));
let peso = parseFloat(prompt('Digite seu peso em Kg: '));
const IMC = peso / (altura * altura);

if (IMC < 18.5) 
    console.log('Seu Índice de Massa Corporal(IMC) é de '+IMC.toFixed(2) +' e você está abaixo do peso.')
    
else if (18.5 <= IMC && IMC < 24.9) {
        console.log('Seu Índice de Massa Corporal(IMC) é de '+IMC.toFixed(2) +' e você está com peso normal.')
    
} else if (25 <= IMC && IMC < 29.9) {
    console.log('Seu Índice de Massa Corporal(IMC) é de '+IMC.toFixed(1) +' e você está com sobrepeso.')

}else{
        console.log('Seu Índice de Massa Corporal(IMC) é de '+IMC.toFixed(2) +' e você apresenta um quadro de obesidade.')
}
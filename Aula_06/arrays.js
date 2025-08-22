/*let numeros = [2,4,6,8];

console.log(numeros);     //[2,4,6,8] (todos os elementos)
console.log(numeros[0]);  //[2] (primeiro elemento)
console.log(numeros[2]);  //[6] (terceiro elemento) */


/*let frutas = ['maçã', 'banana'];
frutas.push('laranja');            //adiciona 'laranja'
console.log(frutas);               //['maçã', 'banana', 'laranja'] 
console.log(frutas.length); 
frutas.pop();                      //Remove o último ('laranja')
console.log(frutas);               //['maçã', 'banana'] 
console.log(frutas.length);         //2 (quantidade de itens) */


//usando o for

/*let nomes = ["Ana", "Carlos", "Bia"];
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
    
} */


//usando o for...of

/*let nomes = ["Ana", "Carlos", "Bia"];
for (let nome of nomes) {
    console.log(nome);   
} */


/*let cidadesNordeste = ["Fortaleza", "Recife", "Natal", "Salvador"];
let cidadesSudeste = new Array ("são Paulo", "Rio de Janeiro")  // indicar ao JavaScript que o () é um novo array

for(i = 0; i < cidadesNordeste.length ; i++) {
    console.log(cidadesNordeste[i]);
} 

for(i = 0; i < cidadesSudeste.length; i++) {
    console.log(cidadesSudeste[i]);
} */
    

// percorrendo o array para encontrar as marias

/*let nomes = ["Ana", "Carlos", "Maria", "João"];

for (let i = 0; i < nomes.length; i++) {
    if (nomes[i] === "Maria") {
        console.log("Maria encontrada!");
        console.log(i);
        break;
    }
}  */


//Solicitando nomes ao usuário para depois informar quais foram os nomes digitados

const prompt = require('prompt-sync')({singint: true});

let nomes = [];
for (let i = 1; i <= 5; i++) {
    let nome = prompt(`Digite o nome ${i}: `); //Crases no lugar das aspas para informar ao JS que no string tem variável
  //let nome = prompt('Digite o nome ' + i + ':');  Essa estrutura é igual a estrutura de cima
    nomes.push(nome);
}
console.log("Nomes digitados:");
for(let nome of nomes) {
    console.log(nome);
}





    
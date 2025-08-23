
// Somar apenas os números pares da matriz

/*const matriz = [
    [1,2,3],
    [4,5,6]
];

let soma = 0;
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] % 2 === 0) {
            soma += matriz[i][j];            
        }        
    }
    
}
console.log("Soma dos pares da matriz: "+ soma); */



//Faça um código em JavaScript para encontrar o maior valor da matriz abaixo:

/* const matriz = [
    [12,7,9],
    [4,15,2]
];

let primeiro = matriz[0][0];
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] > primeiro) {    
            primeiro = matriz[i][j]        
        }
        
    }
    
} 
    console.log("O maior número da matriz é: "+primeiro); */




// Faça um código JavaScript que substitua valores negativos por 0, na matriz abaixo:

const matriz = [
    [3,-1,5],
    [-2,4,-6]
];

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    if (matriz[i][j] < 0) {
        matriz[i][j] = 0;        
    }    
  }    
}
    console.log(matriz);
 

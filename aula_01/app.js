

const prompt = require('prompt-sync')({sigint: true});

let estacaoDoAno = prompt('Qual a estação do ano?');

switch (estacaoDoAno) {
    case 'verao':
        console.log('Estamos no verão"');
        break;
    case 'inverno':
        console.log('Estamos no inverno!');
        break;
    case 'outono':
        console.log('Estamos no outono!');
        break;
    case 'primavera':
        console.log('Estamos na primavera!');
        break;
    default:
        console.log('Esta estação do ano não existe!')
        break;
}
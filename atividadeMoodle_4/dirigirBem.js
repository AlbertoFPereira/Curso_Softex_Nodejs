/*🚗 5. Dirigir Bem – Escola de Direção

Enunciado:

Uma escola de direção deseja criar um sistema para acompanhar a evolução dos alunos nas aulas práticas.

1 - Cada aluno deve ter nome, nível de habilidade (iniciante, intermediário, avançado) e quantidade de aulas realizadas.

2 - O instrutor pode registrar a conclusão de uma aula, aumentando o nível de habilidade do aluno após determinado número de práticas.

O sistema deve mostrar o progresso do aluno e indicar se ele está apto para o exame prático.

Implemente em JavaScript uma aplicação orientada a objetos que simule esse processo. */




const prompt = require('prompt-sync')({ sigint: true }); // chamar a biblioteca



// Valida se o nome não é numérico e não está vazio evitando números no nome do aluno
function lerNome() {
  while (true) {
    const nome = prompt('Digite o nome do aluno: ').trim();
    // isNaN(nome) retorna true se não for um número
    if (nome && isNaN(nome)) {
      return nome;
    }
    console.log('Nome Inválido! Tente novamente.');
  }
}

// Valida se a quantidade de aulas é um número válido, e não um nome
function lerQuantidadeAulas() {
  while (true) {
    const entrada = prompt('Digite a quantidade de aulas realizadas: ').trim();
    const numero = Number(entrada);

    // Verifica se é número e se não é NaN e é >= 0
    if (!isNaN(numero) && numero >= 0) {
      return numero;
    }
    console.log('Quantidade Inválida! Tente novamente.');
  }
}

// ===== Coleta de dados com validação =====
let nome = lerNome();
let quantAula = lerQuantidadeAulas();

// Criação da classe do aluno
class Aluno {
  constructor(nome, aulas) {
    this.nome = nome;
    this.aulas = aulas;
    this.nivel = this.definirNivel();
  }

  //Definir o nível de habilidade do aluno (iniciante, intermediário, avançado) com base na de aulas realizadas
  definirNivel() {
    if (this.aulas < 10) return 'iniciante';
    else if (this.aulas < 20 && this.aulas >= 10) return 'intermediário';
    else return 'avançado';
  }

  //Armazenar o progresso do aluno para exibição das informações ao final da colata de dados
  progresso() {
    const apto = this.nivel === 'avançado';
    return {
      nome: this.nome,
      aulas: this.aulas,
      nivel: this.nivel,
      aptoParaExame: apto
    };
  }
}

// ===== Criação do aluno e exibição =====
const aluno1 = new Aluno(nome, quantAula);

console.log('\n=== Progresso do Aluno ===');
console.log(`Nome: ${aluno1.nome}`);
console.log(`Aulas realizadas: ${aluno1.aulas}`);
console.log(`Nível: ${aluno1.nivel}`);
console.log(`Apto para exame prático: ${aluno1.progresso().aptoParaExame ? 'Sim' : 'Não'}`);
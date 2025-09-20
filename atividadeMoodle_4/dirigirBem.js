/*🚗 5. Dirigir Bem – Escola de Direção

Enunciado:

Uma escola de direção deseja criar um sistema para acompanhar a evolução dos alunos nas aulas práticas.

1 - Cada aluno deve ter nome, nível de habilidade (iniciante, intermediário, avançado) e quantidade de aulas realizadas.

2 - O instrutor pode registrar a conclusão de uma aula, aumentando o nível de habilidade do aluno após determinado número de práticas.

O sistema deve mostrar o progresso do aluno e indicar se ele está apto para o exame prático.

Implemente em JavaScript uma aplicação orientada a objetos que simule esse processo. */


class Aluno {
  constructor(nome) {
    this.nome = nome;
    this.nivel = "iniciante";
    this.aulas = 0;
  }

  registrarAula() {
    this.aulas++;

    // Atualiza o nível conforme a quantidade de aulas
    if (this.aulas >= 10 && this.aulas < 20) {
      this.nivel = "intermediário";
    } else if (this.aulas >= 20) {
      this.nivel = "avançado";
    }
  }

  progresso() {
    const apto = this.nivel === "avançado";
    return {
      nome: this.nome,
      nivel: this.nivel,
      aulas: this.aulas,
      aptoParaExame: apto
    };
  }
}

// ======== Demonstração ========
const aluno1 = new Aluno("Maria");

// Simula aulas
for (let i = 0; i < 22; i++) {
  aluno1.registrarAula();
}

console.log(aluno1.progresso());
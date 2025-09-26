/* 
1 - Criar uma classe chamada Jogador, que deve possuir:

    Atributos:
    a) nome (texto)
    b) pontuacao (número, inicia em 0)

    Métodos:
    c) adicionarPontos(pontos): adiciona pontos à pontuação do jogador.
    d) removerPontos(pontos): remove pontos da pontuação (sem permitir valores negativos).
    e) exibirStatus(): mostra no console o nome e a pontuação atual do jogador.

2 - Criar uma classe chamada Jogo, que deve possuir:

    Atributos:
    f) nome (texto)
    g) jogadores (lista para armazenar jogadores).

    Métodos:
    h) adicionarJogador(jogador): adiciona um jogador ao jogo.
    i) mostrarPontuacoes(): exibe no console a pontuação de todos os jogadores cadastrados.

3 - No programa principal:
    j) Criar um jogo chamado "Aventura Épica".
    k) Criar pelo menos três jogadores diferentes.
    l) Adicionar os jogadores ao jogo.
    m) Simular rodadas de pontuação, onde jogadores ganham e perdem pontos.
    n) Exibir o placar final de todos os jogadores. */

// jogo.js

class Jogador {
  constructor(nome) {
    this.nome = nome;
    this.pontuacao = 0;
  }

  adicionarPontos(pontos) {
    // validação simples: aceita apenas números positivos
    if (typeof pontos !== 'number' || pontos <= 0) {
      console.log('Valor inválido para adicionar pontos.');
      return;
    }
    this.pontuacao += pontos;
    console.log(this.pontuacao);
  }

  removerPontos(pontos) {
    // validação simples: aceita apenas números positivos
    if (typeof pontos !== 'number' || pontos <= 0) {
      console.log('Valor inválido para remover pontos.');
      return;
    }
    this.pontuacao -= pontos;
    if (this.pontuacao < 0) { // garante que não vire negativo
      this.pontuacao = 0;
    }
    console.log(this.pontuacao);
  }

  exibirStatus() {
    console.log(`Jogador: ${this.nome}`);
    console.log(`Pontuação atual: ${this.pontuacao}`);
    console.log('-----------------------');
  }
}

class Jogo {
  constructor(nome) {
    this.nome = nome;
    this.jogadores = [];
  }

  adicionarJogador(jogador) {
    // checagem simples para garantir que é um objeto jogador
    if (!jogador || typeof jogador.nome === 'undefined' || typeof jogador.pontuacao === 'undefined') {
      console.log('Passe uma instância válida de Jogador.');
      return;
    }
    this.jogadores.push(jogador);
  }

  mostrarPontuacoes() {
    console.log(`Placar do jogo: ${this.nome}`);
    // função tradicional (sem arrow) conforme sua preferência
    this.jogadores.forEach(function(j) {
      console.log(j.nome + ': ' + j.pontuacao);
    });
  }
}

// ===== Exemplo de uso =====
const jogador1 = new Jogador('Alberto');
const jogador2 = new Jogador('Ericson');
const jogador3 = new Jogador('Niedja');

const jogo1 = new Jogo('Aventura Épica');

jogador1.adicionarPontos(50);
jogador1.removerPontos(10);
jogador1.exibirStatus();

jogador2.adicionarPontos(100);
jogador2.removerPontos(20);
jogador2.exibirStatus();

jogador3.adicionarPontos(20);
jogador3.removerPontos(10);
jogador3.exibirStatus();

jogo1.adicionarJogador(jogador1);
jogo1.adicionarJogador(jogador2);
jogo1.adicionarJogador(jogador3);

jogo1.mostrarPontuacoes();




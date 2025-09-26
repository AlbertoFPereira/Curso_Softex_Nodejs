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


class Jogador {
    constructor(nome) {
        this.nome = nome;
        this.pontuacao = 0;       
    }
    adicionarPontos(pontos){
        this.pontuacao += pontos;
        console.log(pontuacao);        
    }
}

let jogador1 = new Jogador("Alberto", "40");



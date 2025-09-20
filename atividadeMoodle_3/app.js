/*O questionário_3 tratava-se de perguntas e respostas que foram respondidas via Moodle */

class Conta {
  constructor() {
    this.saldo = 0;
  }
  depositar(valor) {
    this.saldo += valor;
  }
}
const c = new Conta();
c.depositar(200);
console.log(c.saldo);

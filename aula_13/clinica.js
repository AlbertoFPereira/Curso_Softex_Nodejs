/* Requisitos do sistema:

1 - Criar uma classe chamada Paciente que deve possuir os seguintes atributos:

    a) nome (texto)
    b) idade (número)
    c) telefone (texto)

Essa classe deve conter um método chamado exibirInfo(), que mostre as informações do paciente no console.

2 - Criar uma classe chamada Clínica que deve possuir os seguintes atributos:

    a) nome (texto)
    b) pacientes (lista para armazenar objetos do tipo Paciente).

Essa classe deve conter os seguintes métodos:

    a) adicionarPaciente(paciente) → adiciona um paciente à lista.
    b) listarPacientes() → exibe no console todos os pacientes cadastrados na clínica.

3 - No programa principal:

    a) Criar uma clínica chamada "Clínica Bem Estar".
    b) Cadastrar pelo menos três pacientes diferentes com nome, idade e telefone.
    c) Exibir no console a confirmação do cadastro de cada paciente.
    d) Listar todos os pacientes cadastrados na clínica. */


class Paciente {
constructor(nome, idade, telefone){

   this.nome = nome;
   this.idade = idade;
   this.telefone = telefone;   
}
   exibirInfo(){           
      console.log(`Nome: ${this.nome}`);
      console.log(`Idade ${this.idade} anos`);
      console.log(`Telefone: ${this.telefone}`);
      console.log("-----------------------");
   } 
}

class Clinica {
    constructor(nome) {
        this.nome = nome;
        this.pacientes = []
    }
    adicionarPaciente(paciente){
        this.pacientes.push(paciente);
    }
    listarPacientes(){
        console.log(this.pacientes);
    }
}

//Criando objetos
let clinica = new Clinica ("Clínica Bem Estar");
let paciente1 = new Paciente("Alberto", "40", "81999700404");
let paciente2 = new Paciente("Erikson", "44", "81999700505");

paciente1.exibirInfo();
paciente2.exibirInfo();

clinica.adicionarPaciente(paciente1);
clinica.adicionarPaciente(paciente2);
clinica.listarPacientes();
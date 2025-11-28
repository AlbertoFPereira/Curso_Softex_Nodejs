// Classe abstrata Pessoa
abstract class Pessoa {
    constructor(
        public nome: string,
        public email: string
    ) {}

    abstract exibirInfo(): void;
}

// Classe Autor
class Autor extends Pessoa {
    constructor(
        nome: string,
        email: string,
        public biografia: string
    ) {
        super(nome, email);
    }

    exibirInfo(): void {
        console.log(`Autor: ${this.nome}`);
        console.log(`Biografia: ${this.biografia}`);
    }
}

// Classe Livro
class Livro {
    constructor(
        public titulo: string,
        public autor: Autor, // composição
        public disponivel: boolean = true
    ) {}

    emprestar(): void {
        if (!this.disponivel) {
            throw new Error(`O livro "${this.titulo}" não está disponível!`);
        }
        this.disponivel = false;
    }

    devolver(): void {
        if (this.disponivel) {
            throw new Error(`O livro "${this.titulo}" não está emprestado!`);
        }
        this.disponivel = true;
    }
}

// Classe Usuario
class Usuario extends Pessoa {
    public livrosEmprestados: Livro[] = [];

    constructor(
        nome: string,
        email: string,
        public idUsuario: string
    ) {
        super(nome, email);
    }

    emprestarLivro(livro: Livro): void {
        if (!livro.disponivel) {
            throw new Error(`O usuário ${this.nome} tentou emprestar um livro indisponível!`);
        }

        livro.emprestar(); // chama método do Livro
        this.livrosEmprestados.push(livro);
        console.log(`AVISO: Emprestimo realizado com sucesso! - Usuário: ${this.nome}`)
    }

    devolverLivro(livro: Livro): void {
        const indice = this.livrosEmprestados.indexOf(livro);
        if (indice === -1) {
            throw new Error(`Usuário ${this.nome} não possui o livro "${livro.titulo}".`);
        }

        livro.devolver();
        this.livrosEmprestados.splice(indice, 1);
        console.log(`AVISO: Devolução realizada com sucesso! - Usuário: ${this.nome}`)
    }

    exibirInfo(): void {
        console.log(`Usuário: ${this.nome}`);
        console.log(`Email: ${this.email}`);
        console.log(`ID: ${this.idUsuario}`);
        console.log(`Livros emprestados: ${this.livrosEmprestados.length}`);
    }
}

// Interface Repositorio
interface Repositorio {
    salvar(objeto: any): void;
    listar(): any[];
}

// Implementação concreta para Livros
class RepositorioLivro implements Repositorio {
    private livros: Livro[] = [];

    salvar(livro: Livro): void {
        this.livros.push(livro);
    }

    listar(): Livro[] {
        return this.livros;
    }
}

// ---------------------------
// TESTE FINAL (Main)
// ---------------------------

try {
    const autor1 = new Autor("Hellen Beatriz", "hellen@mail.com", "Desenhista nacional premiada.");
    const livro1 = new Livro("A Bela e a Fera", autor1);
    const usuario1 = new Usuario("Alberto Pereira", "albertopereira2h@mail.com", "U001");

    const repo = new RepositorioLivro();
    repo.salvar(livro1);

    console.log("\n-=-=-Empréstimo-=-=-");
    usuario1.emprestarLivro(livro1);

    console.log("\n-=-=- Devolução -=-=-");
    usuario1.devolverLivro(livro1);

    console.log("\n-=-=- Empréstimo -=-=-");
    usuario1.emprestarLivro(livro1);

    console.log("\n-=-=- informação Do Usuário -=-=-");
    usuario1.exibirInfo();

    console.log("\n-=-=- Empréstimo já Realizado! -=-=-");
    usuario1.emprestarLivro(livro1); // aqui lança erro

} catch (erro: any) {
    console.error("Erro capturado:", erro.message);
}
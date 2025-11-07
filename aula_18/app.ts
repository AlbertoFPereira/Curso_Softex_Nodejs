// ===============================================
// Exemplo: Modificadores de Acesso em TypeScript
// Conceitos: public, private, protected, encapsulamento
// ===============================================

// Classe base que representa um produto de uma loja
class Produto {
  // 'private' → só pode ser acessado dentro desta classe
  private nome: string;

  // 'protected' → pode ser acessado na classe e em subclasses (ex: ProdutoImportado)
  protected preco: number;

  // 'public' → pode ser acessado de qualquer lugar (instâncias e fora da classe)
  public estoque: number;

  // Construtor: inicializa os atributos
  constructor(nome: string, preco: number, estoque: number) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }

  // Método público: exibe informações do produto
  public exibirInfo(): void {
    console.log(`Produto: ${this.nome} | Preço: R$${this.preco.toFixed(2)} | Estoque: ${this.estoque}`);
  }

  // Método público: permite alterar o preço de forma controlada
  public alterarPreco(novoPreco: number): void {
    if (novoPreco > 0) {
      this.preco = novoPreco;
    } else {
      console.log("O preço deve ser maior que zero!");
    }
  }

  // Método protegido: calcula desconto (pode ser reutilizado por subclasses)
  protected calcularDesconto(porcentagem: number): number {
    return this.preco - (this.preco * porcentagem) / 100;
  }
}

// Subclasse que herda de Produto
class ProdutoImportado extends Produto {
  private taxaImportacao: number;

  constructor(nome: string, preco: number, estoque: number, taxaImportacao: number) {
    super(nome, preco, estoque); // chama o construtor da classe pai
    this.taxaImportacao = taxaImportacao;
  }

  // Método que calcula o preço final com a taxa de importação
  public calcularPrecoFinal(): number {
    // Aqui podemos usar 'this.preco' porque é 'protected' (visível na subclasse)
    const precoComTaxa = this.preco + this.preco * (this.taxaImportacao / 100);
    return precoComTaxa;
  }

  // Método que aplica um desconto adicional
  public aplicarDesconto(porcentagem: number): void {
    // Podemos reutilizar o método 'calcularDesconto()' da classe pai
    const novoPreco = this.calcularDesconto(porcentagem);
    this.alterarPreco(novoPreco);
  }
}

// ===============================================
// Demonstração prática
// ===============================================

// Cria um produto comum
const camiseta = new Produto("Camiseta Básica", 50, 100);
camiseta.exibirInfo();

// Tentando acessar 'nome' diretamente gera ERRO, pois é privado
// camiseta.nome = "Outra Camiseta"; ❌

// Alterando o preço corretamente através do método público
camiseta.alterarPreco(60);
camiseta.exibirInfo(); // Produto: Camiseta Básica | Preço: R$60.00 | Estoque: 100

// Cria um produto importado (subclasse)
const perfume = new ProdutoImportado("Perfume Francês", 200, 30, 15);
perfume.exibirInfo();

// Calcula e exibe o preço final com taxa de importação
console.log(`Preço final (com taxa): R$${perfume.calcularPrecoFinal().toFixed(2)}`);

// Aplica desconto e exibe novamente
perfume.aplicarDesconto(10);
perfume.exibirInfo();
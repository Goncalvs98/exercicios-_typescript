# Exercícios de TypeScript


## Exercício 1: Tipagem Básica

### Descrição:
Neste exercício, vamos trabalhar com os conceitos de tipagem básica em TypeScript, como **string**, **number**, **boolean** e **array**.

### Instruções:
1. Crie um arquivo `dados.ts`.
2. Defina variáveis para pelo menos três tipos de dados diferentes, como **string**, **number** e **boolean**.
3. Exiba essas variáveis no console.

### Dicas:
- Experimente utilizar o tipo `any` para variáveis que podem ter valores variados.

### Exemplo:
```typescript
// dados.ts
let cidade: string = "São Paulo";
let temperatura: number = 25.5;
let chovendo: boolean = false;

console.log(`Cidade: ${cidade}`);
console.log(`Temperatura: ${temperatura}`);
console.log(`Chovendo: ${chovendo}`);
```

---

## Exercício 2: Funções e Interfaces

### Descrição:
Neste exercício, você irá aprender sobre **interfaces** e **funções**.

### Instruções:
1. Crie um arquivo `produto.ts`.
2. Defina uma interface para representar um livro com as propriedades **titulo**, **autor** e **anoPublicacao**.
3. Escreva uma função que receba um livro e retorne uma mensagem informando o título e o ano de publicação.

### Dicas:
- Use propriedades adequadas para a interface.
- A função deve retornar uma mensagem informativa baseada nas propriedades do livro.

### Exemplo:
```typescript
// produto.ts
interface Livro {
  titulo: string;
  autor: string;
  anoPublicacao: number;
}

function exibirInformacoes(livro: Livro): string {
  return `O livro "${livro.titulo}" foi escrito por ${livro.autor} e publicado em ${livro.anoPublicacao}.`;
}

const livro1: Livro = {
  titulo: "1984",
  autor: "George Orwell",
  anoPublicacao: 1949
};

console.log(exibirInformacoes(livro1));
```

---

## Exercício 3: Classes e Herança

### Descrição:
Agora, você vai aprender a trabalhar com **classes** e **herança**.

### Instruções:
1. Crie um arquivo `veiculo.ts`.
2. Defina uma classe `Pessoa` com as propriedades **nome** e **idade**.
3. Crie uma classe `Aluno` que herda de `Pessoa` e adiciona uma propriedade **curso**.
4. Instancie um objeto `Aluno` e exiba suas propriedades no console.

### Exemplo:
```typescript
// veiculo.ts
class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
}

class Aluno extends Pessoa {
  curso: string;

  constructor(nome: string, idade: number, curso: string) {
    super(nome, idade);
    this.curso = curso;
  }

  exibirInfo(): void {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Curso: ${this.curso}`);
  }
}

const aluno1 = new Aluno("Maria", 22, "Engenharia de Computação");
aluno1.exibirInfo();
```

---

## Exercícios Avançados

### 1. Exercícios de Interfaces e Tipos Avançados:

#### Exercício 1:
**Objetivo**: Trabalhar com **interfaces** e **tipos de união**.

- Defina uma interface `Produto` com as propriedades **nome**, **preco** e **categoria**.
- Defina um tipo de união chamado `FormaPagamento`, que pode ser `'dinheiro'`, `'cartão'` ou `'pix'`.
- Crie uma função que receba um objeto do tipo `Produto` e o tipo de pagamento, e retorne uma mensagem contendo as informações do produto e a forma de pagamento escolhida.

#### Exercício 2:
**Objetivo**: Utilizar **interseção de tipos**.

- Defina dois tipos: `Pessoa` e `Empregado`.
- Usando interseção de tipos, crie um tipo que combine `Pessoa` e `Empregado`.
- Crie uma função que receba um objeto desse tipo combinado e retorne uma mensagem que descreva as informações da pessoa.

### 2. Exercícios de Classes e Herança:

#### Exercício 1:
**Objetivo**: Criar uma **classe** e uma **subclasse** usando herança.

- Crie uma classe `Funcionario` com as propriedades **nome**, **cargo** e **salario**.
- Crie uma subclasse `Gerente` que herda de `Funcionario` e adiciona a propriedade **departamento**.
- Adicione um método na classe `Gerente` que retorne uma descrição detalhada.

#### Exercício 2:
**Objetivo**: Trabalhar com herança e sobrescrita de métodos.

- Crie uma classe `ContaBancaria` com as propriedades **titular** e **saldo**.
- Crie uma subclasse `ContaCorrente` e sobrescreva o método de exibir o saldo para incluir o limite de crédito.

---

## Exercícios de Módulos e Namespaces

### 1. Módulos:
- Crie um módulo `Cliente.ts` que exporta uma classe `Cliente`.
- Crie outro módulo `Pedido.ts` que importa a classe `Cliente` e adiciona a classe `Pedido`.

### 2. Namespaces:
- Crie um **namespace** chamado `Financeiro` com funções para calcular imposto e desconto, além de uma classe `Orcamento`.

---

Esses exercícios são ideais para quem deseja reforçar os conceitos de **TypeScript** e aprender boas práticas de programação orientada a objetos e organização de código.

class Veiculo {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    exibirInfo(): void {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }
}

class Aluno extends Veiculo {
    curso: string;

    constructor(nome: string, idade: number, curso: string) {
        super(nome, idade);
        this.curso = curso;
    }

    exibirInfoCompleta(): void {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Curso: ${this.curso}`);
    }
}

const aluno1 = new Aluno("Carlos", 21, "Engenharia de Computação");
aluno1.exibirInfoCompleta();

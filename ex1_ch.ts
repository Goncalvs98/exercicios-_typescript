class Funcionario {
    nome: string;
    cargo: string;
    salario: number;

    constructor(nome: string, cargo: string, salario: number) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }

    exibirDescricao(): string {
        return `${this.nome} trabalha como ${this.cargo} e recebe R$${this.salario}.`;
    }
}

class Gerente extends Funcionario {
    departamento: string;

    constructor(nome: string, cargo: string, salario: number, departamento: string) {
        super(nome, cargo, salario);
        this.departamento = departamento;
    }

    exibirDescricaoCompleta(): string {
        return `${this.nome} é gerente do departamento de ${this.departamento}, com salário de R$${this.salario}.`;
    }
}

const gerente1 = new Gerente("Carlos", "Gerente", 8000, "Vendas");
console.log(gerente1.exibirDescricaoCompleta());

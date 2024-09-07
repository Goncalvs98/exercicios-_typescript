type Pessoa = {
    nome: string;
    idade: number;
};

type Empregado = {
    empresa: string;
    salario: number;
};

type PessoaEmpregada = Pessoa & Empregado;

function exibirInfoEmpregado(empregado: PessoaEmpregada): string {
    return `${empregado.nome}, de ${empregado.idade} anos, trabalha na ${empregado.empresa} e recebe R$${empregado.salario}.`;
}

const empregado1: PessoaEmpregada = {
    nome: "Ana",
    idade: 30,
    empresa: "Tech Solutions",
    salario: 5000
};

console.log(exibirInfoEmpregado(empregado1));

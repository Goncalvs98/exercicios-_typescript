function exibirInfoEmpregado(empregado) {
    return "".concat(empregado.nome, ", de ").concat(empregado.idade, " anos, trabalha na ").concat(empregado.empresa, " e recebe R$").concat(empregado.salario, ".");
}
var empregado1 = {
    nome: "Ana",
    idade: 30,
    empresa: "Tech Solutions",
    salario: 5000
};
console.log(exibirInfoEmpregado(empregado1));

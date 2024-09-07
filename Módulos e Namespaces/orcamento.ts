/// <reference path="financeiro.ts" />

const orcamento = new Financeiro.Orcamento(5000, ["Notebook", "Monitor", "Teclado"]);
console.log(orcamento.exibirOrcamento());

const imposto = Financeiro.calcularImposto(5000, 10);
const desconto = Financeiro.calcularDesconto(5000, 5);

console.log(`Imposto: R$${imposto}`);
console.log(`Desconto: R$${desconto}`);

/// <reference path="financeiro.ts" />

const orcamento1 = new Financeiro.Orcamento(5000, ["Notebook", "Monitor", "Teclado"]);
console.log(orcamento1.exibirOrcamento());

const imposto = Financeiro.calcularImposto(5000, 10);
const desconto = Financeiro.calcularDesconto(5000, 5);

console.log(`Imposto: R$${imposto}`);
console.log(`Desconto: R$${desconto}`);

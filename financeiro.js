var Financeiro;
(function (Financeiro) {
    function calcularImposto(valor, taxa) {
        return valor * (taxa / 100);
    }
    Financeiro.calcularImposto = calcularImposto;
    function calcularDesconto(valor, taxa) {
        return valor - (valor * (taxa / 100));
    }
    Financeiro.calcularDesconto = calcularDesconto;
    var Orcamento = /** @class */ (function () {
        function Orcamento(valorTotal, itens) {
            this.valorTotal = valorTotal;
            this.itens = itens;
        }
        Orcamento.prototype.exibirOrcamento = function () {
            return "Or\u00E7amento total: R$".concat(this.valorTotal, ", Itens: ").concat(this.itens.join(", "));
        };
        return Orcamento;
    }());
    Financeiro.Orcamento = Orcamento;
})(Financeiro || (Financeiro = {}));

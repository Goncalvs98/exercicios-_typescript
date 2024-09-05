var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    Funcionario.prototype.exibirDescricao = function () {
        return "".concat(this.nome, " trabalha como ").concat(this.cargo, " e recebe R$").concat(this.salario, ".");
    };
    return Funcionario;
}());
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nome, cargo, salario, departamento) {
        var _this = _super.call(this, nome, cargo, salario) || this;
        _this.departamento = departamento;
        return _this;
    }
    Gerente.prototype.exibirDescricaoCompleta = function () {
        return "".concat(this.nome, " \u00E9 gerente do departamento de ").concat(this.departamento, ", com sal\u00E1rio de R$").concat(this.salario, ".");
    };
    return Gerente;
}(Funcionario));
var gerente1 = new Gerente("Carlos", "Gerente", 8000, "Vendas");
console.log(gerente1.exibirDescricaoCompleta());

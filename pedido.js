"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente_1 = require("./Cliente");
var Pedido = /** @class */ (function () {
    function Pedido(cliente, produto, valor) {
        this.cliente = cliente;
        this.produto = produto;
        this.valor = valor;
    }
    Pedido.prototype.exibirPedido = function () {
        return "Cliente: ".concat(this.cliente.nome, ", Produto: ").concat(this.produto, ", Valor: R$").concat(this.valor);
    };
    return Pedido;
}());
var cliente1 = new Cliente_1.Cliente("Roberto", "roberto@example.com");
var pedido1 = new Pedido(cliente1, "Câmera", 2500);
console.log(pedido1.exibirPedido());

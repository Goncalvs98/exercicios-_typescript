import { Cliente } from './Cliente';

class Pedido {
    cliente: Cliente;
    produto: string;
    valor: number;

    constructor(cliente: Cliente, produto: string, valor: number) {
        this.cliente = cliente;
        this.produto = produto;
        this.valor = valor;
    }

    exibirPedido(): string {
        return `Cliente: ${this.cliente.nome}, Produto: ${this.produto}, Valor: R$${this.valor}`;
    }
}

const cliente1 = new Cliente("Roberto", "roberto@example.com");
const pedido1 = new Pedido(cliente1, "Câmera", 2500);

console.log(pedido1.exibirPedido());

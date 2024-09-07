interface Produto {
    nome: string;
    preco: number;
    categoria: string;
}

type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';

function realizarCompra(produto: Produto, pagamento: FormaPagamento): string {
    return `Você comprou o produto ${produto.nome} por R$${produto.preco}, na categoria ${produto.categoria}, com pagamento via ${pagamento}.`;
}

const produto1: Produto = {
    nome: "Notebook",
    preco: 3500,
    categoria: "Eletrônicos"
};

console.log(realizarCompra(produto1, 'pix'));

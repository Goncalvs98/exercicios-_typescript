function realizarCompra(produto, pagamento) {
    return "Voc\u00EA comprou o produto ".concat(produto.nome, " por R$").concat(produto.preco, ", na categoria ").concat(produto.categoria, ", com pagamento via ").concat(pagamento, ".");
}
var produto1 = {
    nome: "Notebook",
    preco: 3500,
    categoria: "Eletrônicos"
};
console.log(realizarCompra(produto1, 'pix'));

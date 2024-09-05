function exibirInformacoes(livro) {
    return "O livro \"".concat(livro.titulo, "\" foi escrito por ").concat(livro.autor, " e publicado em ").concat(livro.anoPublicacao, ".");
}
var livro1 = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
};
console.log(exibirInformacoes(livro1));

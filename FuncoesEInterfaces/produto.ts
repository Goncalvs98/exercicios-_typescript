interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

function exibirInformacoes(livro: Livro): string {
    return `O livro "${livro.titulo}" foi escrito por ${livro.autor} e publicado em ${livro.anoPublicacao}.`;
}

const livro1: Livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
};

console.log(exibirInformacoes(livro1));

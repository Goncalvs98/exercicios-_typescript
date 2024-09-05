var nome = "Maria";
var idade = 25;
var estudante = true;
var habilidades = ["TypeScript", "JavaScript", "HTML"];
var valorIndefinido = "Texto agora, mas pode ser número depois";
console.log("Nome: ".concat(nome));
console.log("Idade: ".concat(idade));
console.log("Estudante: ".concat(estudante));
console.log("Habilidades: ".concat(habilidades.join(", ")));
console.log("Valor Indefinido: ".concat(valorIndefinido));
valorIndefinido = 42; // Mudando o tipo da variável any
console.log("Novo Valor Indefinido: ".concat(valorIndefinido));

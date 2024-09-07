let nome: string = "Maria";
let idade: number = 25;
let estudante: boolean = true;
let habilidades: string[] = ["TypeScript", "JavaScript", "HTML"];
let valorIndefinido: any = "Texto agora, mas pode ser número depois";

console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);
console.log(`Estudante: ${estudante}`);
console.log(`Habilidades: ${habilidades.join(", ")}`);
console.log(`Valor Indefinido: ${valorIndefinido}`);

valorIndefinido = 42; // Mudando o tipo da variável any
console.log(`Novo Valor Indefinido: ${valorIndefinido}`);

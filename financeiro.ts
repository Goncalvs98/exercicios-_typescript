namespace Financeiro {
    export function calcularImposto(valor: number, taxa: number): number {
        return valor * (taxa / 100);
    }

    export function calcularDesconto(valor: number, taxa: number): number {
        return valor - (valor * (taxa / 100));
    }

    export class Orcamento {
        valorTotal: number;
        itens: string[];

        constructor(valorTotal: number, itens: string[]) {
            this.valorTotal = valorTotal;
            this.itens = itens;
        }

        exibirOrcamento(): string {
            return `Orçamento total: R$${this.valorTotal}, Itens: ${this.itens.join(", ")}`;
        }
    }
}

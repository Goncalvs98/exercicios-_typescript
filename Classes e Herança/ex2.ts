class ContaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    exibirSaldo(): void {
        console.log(`O saldo da conta de ${this.titular} é R$${this.saldo}.`);
    }
}

class ContaCorrente extends ContaBancaria {
    limiteCredito: number;

    constructor(titular: string, saldo: number, limiteCredito: number) {
        super(titular, saldo);
        this.limiteCredito = limiteCredito;
    }

    exibirSaldo(): void {
        console.log(`O saldo da conta de ${this.titular} é R$${this.saldo}, com limite de crédito de R$${this.limiteCredito}.`);
    }
}

const conta1 = new ContaCorrente("Lucas", 2000, 1000);
conta1.exibirSaldo();

import { Conta } from "./conta";

export class Banco {
    private contas: Conta[];

    constructor() {
        this.contas = [];
    }

    inserir(conta: Conta): void {
        if (this.consultar(conta.id) !== null) {
            throw new Error("Conta já cadastrada.");
        }

        this.contas.push(conta);
    }

    consultar(id: number): Conta | null {
        for (let conta of this.contas) {
            if (conta.id === id) {
                return conta;
            }
        }

        return null;
    }

    private consultarIndice(id: number): number {
        for (let i = 0; i < this.contas.length; i++) {
            const conta = this.contas[i];

            if (conta && conta.id === id) {
                return i;
            }
        }

        return -1;
    }

    excluir(id: number): void {
        let indice = this.consultarIndice(id);

        if (indice !== -1) {
            this.contas.splice(indice, 1);
        }
    }

    depositar(id: number, valor: number): void {
        let conta = this.consultar(id);

        if (conta) {
            conta.depositar(valor);
        } else {
            throw new Error("Conta não encontrada.");
        }
    }

    sacar(id: number, valor: number): void {
        let conta = this.consultar(id);

        if (conta) {
            conta.sacar(valor);
        } else {
            throw new Error("Conta não encontrada.");
        }
    }

    transferir(
        idOrigem: number,
        idDestino: number,
        valor: number
    ): void {
        let origem = this.consultar(idOrigem);
        let destino = this.consultar(idDestino);

        if (!origem || !destino) {
            throw new Error("Conta não encontrada.");
        }

        origem.transferir(destino, valor);
    }

    quantidadeContas(): number {
        return this.contas.length;
    }

    listar(): Conta[] {
        return [...this.contas];
    }

    carregarDados(): void {
        if (this.contas.length === 0) {
            this.inserir(new Conta(1, "111-1", 100));
            this.inserir(new Conta(2, "222-2", 200));
        }
    }
}
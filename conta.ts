import type {Cliente} from "./cliente"
export class Conta {
    private _id: number;
    private _numero: string;
    private _saldo: number;
    private _cliente: Cliente | null;
    private _dataDeAbertura: Date;

    constructor(
        id: number,
        numero: string,
        saldo: number,
        dataDeAbertura: Date = new Date()
    ) {
        this._id = id;
        this._numero = numero;
        this._saldo = saldo;
        this._cliente = null;
        this._dataDeAbertura = dataDeAbertura;
    }

    get id(): number {
        return this._id;
    }

    get numero(): string {
        return this._numero;
    }

    get saldo(): number {
        return this._saldo;
    }

    get cliente(): Cliente | null {
        return this._cliente;
    }

    get dataDeAbertura(): Date {
        return this._dataDeAbertura;
    }

    associarCliente(cliente: Cliente): void {
        if (this._cliente !== null) {
            throw new Error("Esta conta já possui um cliente.");
        }

        this._cliente = cliente;
    }

    depositar(valor: number): void {
        if (valor <= 0) {
            throw new Error("O valor do depósito deve ser positivo.");
        }

        this._saldo += valor;
    }

    sacar(valor: number): void {
        if (valor <= 0) {
            throw new Error("O valor do saque deve ser positivo.");
        }

        if (valor > this._saldo) {
            throw new Error("Saldo insuficiente.");
        }

        this._saldo -= valor;
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}
import promptSync from "prompt-sync";
import { Banco } from "./banco";
import { Conta } from "./conta";

const input = promptSync();

class App {
    private banco: Banco;

    constructor() {
        this.banco = new Banco();
    }

    menu(): void {
        this.banco.carregarDados();

        let opcao = "";

        do {
            console.log("\n===== SISTEMA BANCÁRIO =====");
            console.log("01 - Inserir conta");
            console.log("02 - Consultar conta");
            console.log("03 - Sacar");
            console.log("04 - Depositar");
            console.log("05 - Excluir conta");
            console.log("06 - Transferir");
            console.log("07 - Quantidade de contas");
            console.log("08 - Listar contas");
            console.log("00 - Sair");

            opcao = input("Escolha uma opção: ");

            try {
                switch (opcao) {
                    case "01": {
                        const id = Number(input("ID: "));
                        const numero = input("Número: ");
                        const saldo = Number(input("Saldo inicial: "));

                        this.banco.inserir(
                            new Conta(id, numero, saldo)
                        );

                        console.log("Conta cadastrada!");
                        break;
                    }

                    case "02": {
                        const id = Number(input("ID da conta: "));
                        const conta = this.banco.consultar(id);

                        console.log(conta ?? "Conta não encontrada.");
                        break;
                    }

                    case "03": {
                        const id = Number(input("ID da conta: "));
                        const valor = Number(input("Valor do saque: "));

                        this.banco.sacar(id, valor);
                        console.log("Saque realizado!");
                        break;
                    }

                    case "04": {
                        const id = Number(input("ID da conta: "));
                        const valor = Number(input("Valor do depósito: "));

                        this.banco.depositar(id, valor);
                        console.log("Depósito realizado!");
                        break;
                    }

                    case "05": {
                        const id = Number(input("ID da conta: "));

                        this.banco.excluir(id);
                        console.log("Operação de exclusão realizada.");
                        break;
                    }

                    case "06": {
                        const origem = Number(input("ID da origem: "));
                        const destino = Number(input("ID do destino: "));
                        const valor = Number(input("Valor: "));

                        this.banco.transferir(origem, destino, valor);
                        console.log("Transferência realizada!");
                        break;
                    }

                    case "07":
                        console.log(
                            "Quantidade de contas:",
                            this.banco.quantidadeContas()
                        );
                        break;

                    case "08":
                        console.log(this.banco.listar());
                        break;

                    case "00":
                        console.log("Programa encerrado.");
                        break;

                    default:
                        console.log("Opção inválida.");
                }
            } catch (erro) {
                console.log(
                    "Erro:",
                    erro instanceof Error ? erro.message : erro
                );
            }

        } while (opcao !== "00");
    }
}

const app = new App();
app.menu();
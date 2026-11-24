import { Calculadora } from "./calculadora";
import { Hora } from "./hora";
import { Conta } from "./conta";
import { Banco } from "./banco";
import { Cliente } from "./cliente";

console.log("===== TESTE CALCULADORA =====");

const calculadora = new Calculadora(10, 5);

console.log("Soma:", calculadora.somar());
console.log("Subtração:", calculadora.subtrair());

// console.log(calculadora.operando1);
// Acesso privado: gera erro no TypeScript.


console.log("\n===== TESTE HORA =====");

const hora = new Hora(9, 30, 45);

console.log("Hora:", hora.getHora());
console.log("Minutos:", hora.getMinutos());
console.log("Segundos:", hora.getSegundos());
console.log("Hora completa:", hora.getHoraCompleta());


console.log("\n===== TESTE CONTA =====");

const conta1 = new Conta(1, "111-1", 100);
const conta2 = new Conta(2, "222-2", 200);

console.log("Saldo inicial:", conta1.saldo);

conta1.depositar(50);
console.log("Após depósito:", conta1.saldo);

conta1.sacar(20);
console.log("Após saque:", conta1.saldo);

conta1.transferir(conta2, 30);

console.log("Saldo conta 1:", conta1.saldo);
console.log("Saldo conta 2:", conta2.saldo);

// console.log(conta1._saldo);
// Acesso privado: gera erro no TypeScript.


console.log("\n===== TESTE BANCO =====");

const banco = new Banco();

banco.inserir(conta1);
banco.inserir(conta2);

console.log("Consultar conta:", banco.consultar(1));
console.log("Quantidade:", banco.quantidadeContas());

banco.depositar(1, 100);

console.log("Saldo após depósito:", banco.consultar(1)?.saldo);

// console.log(banco.contas);
// Acesso privado: gera erro no TypeScript.


console.log("\n===== TESTE CLIENTE =====");

const cliente = new Cliente(
    1,
    "Natanael",
    "12345678900",
    new Date(2000, 0, 1)
);

cliente.adicionarConta(conta1);

console.log("ID:", cliente.id);
console.log("Nome:", cliente.nome);
console.log("CPF:", cliente.cpf);
console.log("Nascimento:", cliente.dataNascimento);
console.log("Contas:", cliente.contas);

// console.log(cliente._nome);
// Acesso privado: gera erro no TypeScript.


console.log("\n===== TESTES FINALIZADOS =====");
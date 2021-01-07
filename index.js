import {Cliente} from "./cliente.js";
import {ContaCorrente} from "./conta_corrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 88822233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 11122233309;

const contaCorrenteDoRicardo = new ContaCorrente();
contaCorrenteDoRicardo.agencia = 1001;

contaCorrenteDoRicardo.depositar(300);
console.log(contaCorrenteDoRicardo._saldo);

contaCorrenteDoRicardo.sacar(50);
console.log(contaCorrenteDoRicardo._saldo);

const valorSacado = contaCorrenteDoRicardo.sacar(50);
console.log(valorSacado);

console.log(cliente1);
console.log(cliente2);

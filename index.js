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
contaCorrenteDoRicardo.cliente = cliente1;

contaCorrenteDoRicardo.depositar(300);

contaCorrenteDoRicardo.sacar(50);

const conta2 = new ContaCorrente();
conta2._cliente = 0;

contaCorrenteDoRicardo.depositar(200);
console.log(conta2);

contaCorrenteDoRicardo.transferir(175, conta2);

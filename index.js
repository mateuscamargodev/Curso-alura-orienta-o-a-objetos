import {Cliente} from "./cliente.js";
import {ContaCorrente} from "./conta/conta_corrente.js";
import { ContaPoupanca } from "./conta/conta_poupanca.js";

const cliente1 = new Cliente("Ricardo", 88822233309);
const conta1 = new ContaCorrente(cliente1, 1001);
conta1.depositar(500);
conta1.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

console.log(contaPoupanca);
console.log(conta1);

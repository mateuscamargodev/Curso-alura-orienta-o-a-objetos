import {Cliente} from "./cliente.js";
import {ContaCorrente} from "./conta_corrente.js";
import { ContaPoupanca } from "./conta_poupanca.js";

const cliente1 = new Cliente("Ricardo", 88822233309);
const conta1 = new ContaCorrente(1001, cliente1);
conta1.depositar(300);
conta1.sacar(50);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

console.log(contaPoupanca);
console.log(conta1);

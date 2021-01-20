import {Conta} from "./cliente.js";

export class ContaPoupanca extends Conta{
    constructor(saldoInicial, cliente, agencia){
        super(50, cliente, agencia);
    }
}
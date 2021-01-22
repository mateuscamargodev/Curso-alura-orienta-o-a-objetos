import {Conta} from "./conta.js";

export class ContaPoupanca extends Conta{
    constructor(saldoInicial, cliente, agencia){
        super(50, cliente, agencia);
    }

    sacar(valor) {
        let taxa = 1.02;
        return this._sacar(valor, taxa);
    }
}
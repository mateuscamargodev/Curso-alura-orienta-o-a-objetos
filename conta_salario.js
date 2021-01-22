import {Conta} from "./conta.js";

export class ContaSalario extends Conta {
    constructor(cliente) {
        super(0, cliente, 100);
    }

    sacar(valor){
        let taxa = 1.01;
        return this._sacar(valor, taxa);
    }
}

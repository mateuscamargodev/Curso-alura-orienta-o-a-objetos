import {Cliente} from "./cliente.js";

export class ContaCorrente {
    agencia;
    _cliente;
    _saldo;
    static numeroDeContas = 0;

    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this.cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numeroDeContas += 1;
    }
}

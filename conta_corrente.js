import {Cliente} from "./cliente.js";

export class ContaCorrente {
    agencia;
    _cliente;
    _saldo = 0;

    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }
    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if(valor <= 0) {
            return;
        }

        else {
            this._saldo += valor;
        }
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

        if(this._saldo < valor) {
            console.log("[ERRO]Você não tem saldo suficiente para fazer essa transferência");
            return;
        }
    }
}

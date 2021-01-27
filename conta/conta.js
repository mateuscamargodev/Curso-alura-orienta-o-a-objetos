import {ContaCorrente} from "./conta_corrente.js";

export class Conta {
    static numeroDeContas = 0;

    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo conta diretamente");
        }
        
        this._saldo = saldoInicial;
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {
        let taxa = 1;
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
        }

        return 0;
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
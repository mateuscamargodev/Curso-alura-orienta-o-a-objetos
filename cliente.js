export class Cliente {
    constructor(nome, cpf, senha){
        this.nome = nome;
        this.cpf = cpf;
        this._senha = senha;
    }

    autenticar(){
        return true;
    }
}
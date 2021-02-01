export class SistemaAutenticacao {
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            autenticavel.autenticar(senha);
        }
        else {
            return;
        }
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && 
        autenticavel.autenticar instanceof Function;
    }
}
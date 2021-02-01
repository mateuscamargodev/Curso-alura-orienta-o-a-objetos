import {Cliente} from "./cliente.js";
import {Gerente} from "./funcionarios/Gerente.js";
import {Diretor} from "./funcionarios/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
const gerente = new Gerente("Ricardo", 5000, 12345678901);

diretor.cadastrarSenha("sabiá");
const estaLogado = SistemaAutenticacao.login(diretor, "sabiá");

const cliente = new Cliente("Roberto", 123, "curió");
const clienteLogado = SistemaAutenticacao.login(cliente, "curió");

console.log(clienteLogado);
console.log(estaLogado);
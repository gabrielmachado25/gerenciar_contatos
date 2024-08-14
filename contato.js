let contatos = [];
let proximoId = 1;

class Contato {
    constructor(nome, email, telefone) {
        this.id = proximoId++;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}

function adicionarContato(nome, email, telefone) {
    const contato = new Contato(nome, email, telefone);
    contatos.push(contato);
    return contato;
}

function obterContato(id) {
    return contatos.find(contato => contato.id === parseInt(id));
}

function atualizarContato(id, nome, email, telefone) {
    const contato = obterContato(id);
    if (contato) {
        contato.nome = nome;
        contato.email = email;
        contato.telefone = telefone;
    }
    return contato;
}

function deletarContato(id) {
    contatos = contatos.filter(contato => contato.id !== parseInt(id));
}

function listarContatos() {
    return contatos;
}

module.exports = {
    adicionarContato,
    obterContato,
    atualizarContato,
    deletarContato,
    listarContatos
};

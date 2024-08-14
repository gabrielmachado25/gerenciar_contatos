const contatoModel = require('./contato');

function listarContatos(req, res) {
    res.json(contatoModel.listarContatos());
}

function obterContato(req, res) {
    const contato = contatoModel.obterContato(req.params.id);
    if (contato) {
        res.json(contato);
    } else {
        res.status(404).json({ message: 'Contato não encontrado' });
    }
}

function criarContato(req, res) {
    const { nome, email, telefone } = req.body;
    if (!nome || !email || !telefone) {
        return res.status(400).json({ message: 'Nome, email e telefone são obrigatórios' });
    }
    const novoContato = contatoModel.adicionarContato(nome, email, telefone);
    res.status(201).json(novoContato);
}

function atualizarContato(req, res) {
    const { nome, email, telefone } = req.body;
    const contatoAtualizado = contatoModel.atualizarContato(req.params.id, nome, email, telefone);
    if (contatoAtualizado) {
        res.json(contatoAtualizado);
    } else {
        res.status(404).json({ message: 'Contato não encontrado' });
    }
}

function deletarContato(req, res) {
    contatoModel.deletarContato(req.params.id);
    res.status(204).end();
}

module.exports = {
    listarContatos,
    obterContato,
    criarContato,
    atualizarContato,
    deletarContato
};

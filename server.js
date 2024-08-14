const express = require('express');
const bodyParser = require('body-parser');
const contatoController = require('./contatoController');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/contatos', contatoController.listarContatos);
app.get('/contatos/:id', contatoController.obterContato);
app.post('/contatos', contatoController.criarContato);
app.put('/contatos/:id', contatoController.atualizarContato);
app.delete('/contatos/:id', contatoController.deletarContato);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

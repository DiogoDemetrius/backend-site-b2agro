const contato = require('../models/Contato');

const contatoServices = {
    
    async criarContato(contatoData) {
        try {
            const novoContato = new contato(contatoData);
            await novoContato.save();
            return novoContato;
        } catch (error) {
            throw new Error('Erro ao criar contato: ' + error.message);
        }
    }
}

module.exports = contatoServices;
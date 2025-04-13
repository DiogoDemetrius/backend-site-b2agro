const contatoServices = require('../services/contatoServices');

module.exports = {
    async criarContato(req, res) {
        try {
            const contatoData = req.body;
            const novoContato = await contatoServices.criarContato(contatoData);
            res.status(201).json(novoContato);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};
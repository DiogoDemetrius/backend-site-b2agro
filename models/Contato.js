const mongoose = require('mongoose');

const contatoSchema = new mongoose.Schema({
    nome: {   
        type: String, 
        required: true 
    },
    email: {  
        type: String, 
        required: true 
    },
    mensagem: { 
        type: String, 
        required: true 
    },
    data: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Contato', contatoSchema);

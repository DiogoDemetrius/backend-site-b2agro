const mongoose = require('mongoose');
require('dotenv').config();

console.log('MONGODB_URI:', process.env.MONGODB_URI);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Banco de dados conectado com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar no banco de dados:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
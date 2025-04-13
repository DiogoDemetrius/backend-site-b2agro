const express = require('express');
const connectDB = require('./config/mongodb')
const contatoRoutes = require('./routes/contatoRoutes');
const cors = require('./config/cors');
require('dotenv').config();

const app = express();
app.use(express.json());

connectDB();

app.use(cors);

app.use('/api/contato', contatoRoutes);

module.exports = app
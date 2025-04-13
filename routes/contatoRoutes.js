const contatoController = require('../controllers/contatoController');
const express = require('express');
const router = express.Router();

router.post('/criarContato', contatoController.criarContato);

module.exports = router;
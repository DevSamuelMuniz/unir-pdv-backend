// routes/VendaRoute.js

const express = require('express');
const VendaController = require('../controllers/vendaController');

const router = express.Router();

// Rota para realizar a venda
router.post('/realizar-venda', VendaController.realizarVenda);

module.exports = router;

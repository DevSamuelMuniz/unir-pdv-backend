const express = require("express");
const router = express.Router();
const { cadastrarFuncionario } = require("../controllers/funcionariosController");

// Rota para cadastrar um funcionário
router.post("/cadastrar", cadastrarFuncionario);

module.exports = router;

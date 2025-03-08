const express = require("express");
const { cadastrarProduto } = require("../controllers/produtoController");

const router = express.Router();

router.post("/cadastrar", cadastrarProduto);

module.exports = router;

const Produto = require("../models/Produto");

exports.cadastrarProduto = async (req, res) => {
  try {
    const { nome, codigoBarras, lucro, margem, precoCompra, precoVenda, grupo, subgrupo, fornecedor, estoque, imagem } = req.body;

    const novoProduto = new Produto({
      nome,
      codigoBarras,
      precoCompra,
      precoVenda,
      lucro,
      margem,
      grupo,
      subgrupo,
      fornecedor,
      estoque,
      imagem
    });

    await novoProduto.save();
    res.status(201).json({ message: "Produto cadastrado com sucesso!", produto: novoProduto });

  } catch (error) {
    console.error("Erro ao cadastrar produto:", error);
    res.status(500).json({ message: "Erro interno ao cadastrar produto." });
  }
};

const mongoose = require("mongoose");

const produtoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  codigoBarras: { type: String, required: true, unique: true },
  precoCompra: { type: Number, required: true },
  precoVenda: { type: Number, required: true },
  lucro: { type: Number, required: true },
  margem: { type: Number, required: true },
  grupo: { type: String, required: true },
  subgrupo: { type: String, required: true },
  fornecedor: { type: String, required: true },
  estoque: { type: Number, required: true },
  imagem: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Produto", produtoSchema);

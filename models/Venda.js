// models/Venda.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

const VendaSchema = new Schema({
  produtos: [
    {
      produtoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Produto' },
      quantidade: { type: Number, required: true },
      desconto: { type: Number, required: true },
      total: { type: Number, required: true },
    },
  ],
  vendedorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Funcionario', required: true },
  formaPagamento: [
    {
      tipo: { type: String, required: true },
      valor: { type: Number, required: true },
    },
  ],
  totalVenda: { type: Number, required: true },
  dataVenda: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Venda', VendaSchema);

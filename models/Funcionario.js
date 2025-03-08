const mongoose = require("mongoose");

const funcionarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  telefone: { type: String, required: true },
  cargo: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Funcionario", funcionarioSchema);

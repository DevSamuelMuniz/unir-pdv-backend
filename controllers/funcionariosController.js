const Funcionario = require('../models/Funcionario');
const Login = require('../models/user');
const bcrypt = require('bcryptjs');

const cadastrarFuncionario = async (req, res) => {
  const { nome, cpf, email, telefone, cargo } = req.body;

  try {
    // Verificar se o funcionário já existe
    const funcionarioExistente = await Funcionario.findOne({ cpf });
    if (funcionarioExistente) {
      return res.status(400).json({ message: "Funcionário já cadastrado!" });
    }

    // Criação do Funcionário
    const novoFuncionario = new Funcionario({
      nome,
      cpf,
      email,
      telefone,
      cargo,
    });

    await novoFuncionario.save();

    // Criação do Login
    const senhaPadrao = '123456';
    const senhaCriptografada = await bcrypt.hash(senhaPadrao, 10);

    const novoLogin = new Login({
      nome,
      email,
      senha: senhaCriptografada,
    });

    await novoLogin.save();

    return res.status(200).json({ message: "Funcionário cadastrado com sucesso!" });

  } catch (error) {
    console.error("Erro ao cadastrar funcionário:", error);
    return res.status(500).json({ message: "Erro interno do servidor!" });
  }
};

module.exports = { cadastrarFuncionario };

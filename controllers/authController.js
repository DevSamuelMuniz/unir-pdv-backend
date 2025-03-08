const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    // Verificar se o usuário já existe
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "E-mail já cadastrado!" });
    }

    // Criar usuário
    const newUser = new User({ nome, email, senha });
    await newUser.save();

    res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro no servidor", error });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    // Verificar se o usuário existe
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado!" });
    }

    // Comparar senha
    const senhaCorreta = await bcrypt.compare(senha, user.senha);
    if (!senhaCorreta) {
      return res.status(400).json({ message: "Senha inválida!" });
    }

    // Gerar token JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ message: "Login realizado com sucesso!", token });
  } catch (error) {
    res.status(500).json({ message: "Erro no servidor", error });
  }
};

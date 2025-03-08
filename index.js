// const express = require("express");
// const mongoose = require("mongoose");
// const connectDB = require("./config/db");
// const cadastroRoutes = require("./routes/cadastroRoutes");
// const funcionarioRoutes = require("./routes/funcionarioRoutes");
// const loginRoutes = require("./routes/loginRoutes");
// const produtoRoutes = require("./routes/produtoRoutes");
// const vendaRoutes = require("./routes/vendaRoutes");
// const authRoutes = require("./routes/auth");
// const cors = require("cors");

// const app = express();

// // Configuração do CORS
// app.use(cors({
//   origin: "http://localhost:3000", // Permitir requisições apenas do frontend
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type", "Authorization"]
// }));

// // Conectar ao MongoDB
// connectDB();

// // Middleware para parsear JSON
// app.use(express.json());

// // Usar as rotas
// app.use("/api/cadastro", cadastroRoutes);
// app.use("/api/funcionarios", funcionarioRoutes);
// app.use("/api/login", loginRoutes);
// app.use("/api/produtos", produtoRoutes);
// app.use("/api/vendas", vendaRoutes);
// app.use("/api/auth", authRoutes); 

// // Iniciar o servidor
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`);
// });


const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

//link rotas
const authRoutes = require("./routes/authRoutes");
const produtoRoutes = require("./routes/produtoRoutes");

const app = express();

// Conectar ao MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use("/api/auth", authRoutes);
app.use("/api/produtos", produtoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

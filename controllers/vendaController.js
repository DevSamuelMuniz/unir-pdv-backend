// controllers/VendaController.js

const Produto = require('../models/Produto');
const Funcionario = require('../models/Funcionario');
const Venda = require('../models/Venda');

module.exports = {
  // Função para realizar a venda
  realizarVenda: async (req, res) => {
    const { produtos, vendedorId, formaPagamento } = req.body;

    try {
      let totalVenda = 0;
      const produtosVenda = [];

      // Loop para processar os produtos na venda
      for (const item of produtos) {
        const produto = await Produto.findById(item.produtoId);
        if (!produto) {
          return res.status(400).json({ error: 'Produto não encontrado' });
        }

        const totalItem = item.quantidade * produto.precoVenda - item.desconto;
        totalVenda += totalItem;

        // Atualizar o estoque do produto
        produto.estoque -= item.quantidade;
        await produto.save();

        // Adicionar item da venda no array de produtos
        produtosVenda.push({
          produtoId: produto._id,
          quantidade: item.quantidade,
          desconto: item.desconto,
          total: totalItem,
        });
      }

      // Criar a venda no banco de dados
      const venda = new Venda({
        produtos: produtosVenda,
        vendedorId,
        formaPagamento,
        totalVenda,
      });

      await venda.save();
      res.status(201).json({ message: 'Venda realizada com sucesso!', venda });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao realizar a venda' });
    }
  },
};

const { Router } = require('express');
const { leitura } = require('../fsUtils');

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const data = await leitura(); // Passando parâmetro para a função ela retorna no formato de JSON.
    return res.status(200).json(data);
  } catch (erro) {
    return res.status(500).send(`Algo deu errado: ${erro.message}`);
  }
});

module.exports = router;
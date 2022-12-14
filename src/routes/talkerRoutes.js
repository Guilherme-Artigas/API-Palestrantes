const { Router } = require('express');
const { leitura } = require('../fsUtils');

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const data = await leitura(); // Passando parâmetro "true" para a função ela retorna no formato de JSON.
    return res.status(200).json(data);
  } catch (erro) {
    return res.status(500).send(`Algo deu errado na rota GET talker: ${erro.message}`);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const data = await leitura();
    const wantedTalker = data.find((talker) => talker.id === id);
    if (wantedTalker === undefined) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
    return res.status(200).json(wantedTalker);
  } catch (erro) {
    return res.status(500).send(`Algo deu errado na rota GET /talker/:id: ${erro.message}`);
  }
});

module.exports = router;
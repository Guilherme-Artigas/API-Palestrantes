const { Router } = require('express');
const { leitura, escrita } = require('../fsUtils');
const {
  validateAuth,
  validateName,
  validateAge,
  validateTalker,
  validateDate,
  validateRate,
} = require('../middlewares/validateRegistration');

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

router.post(
  '/',
  validateAuth,
  validateName,
  validateAge,
  validateTalker,
  validateDate,
  validateRate,
  async (req, res) => {
    try {
      const payload = req.body;
      const oldList = await leitura();
      const lastId = oldList.find((_talk, index, arr) => index === arr.length - 1).id;
      const nextId = lastId + 1;
      const newList = { id: nextId, ...payload };
      await escrita(oldList.concat(newList));
      return res.status(201).json({ ...newList });
    } catch (erro) {
      return res.status(500).send(`Algo deu errado na rota POST /talker: ${erro.message}`);
    }
  },
);

router.put(
  '/:id',
  validateAuth,
  validateName,
  validateAge,
  validateTalker,
  validateDate,
  validateRate,
  async (req, res) => {
    try {
      const { id } = req.params;
      const payload = req.body;
      const oldList = await leitura();
      const oldTalk = oldList.find((talk) => talk.id === Number(id));
      const newTalk = { id: oldTalk.id, ...payload };
      const updateList = oldList.map((talk) => {
        if (talk.id === Number(id)) return newTalk;
        return talk;
      });
      await escrita([...updateList]);
      return res.status(200).json(newTalk);
    } catch (erro) {
      return res.status(500).send(`Algo deu errado na rota PUT /talker/:id: ${erro.message}`);
    }
  },
);

module.exports = router;
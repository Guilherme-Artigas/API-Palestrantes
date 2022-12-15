const validateAuth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token não encontrado' });
  if (authorization.length !== 16 || typeof authorization !== 'string') {
    return res.status(401).json({ message: 'Token inválido' });
  }
  next();
};

const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  if (name.length <= 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  next();
};

const validateAge = (req, res, next) => {
  const age = Number(req.body.age);
  if (!age) return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  if (age < 18) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  next();
};

const validateTalker = (req, res, next) => {
  const { talk } = req.body;
  if (typeof talk !== 'object' || talk === undefined) {
    return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  }
  next();
};

const validateDate = (req, res, next) => {
  const { watchedAt } = req.body.talk;
  if (watchedAt === '' || watchedAt === undefined) {
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  const reData = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
  const correctData = reData.test(watchedAt);
  if (!correctData) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
};

const validateRate = (req, res, next) => {
  const { rate } = req.body.talk;
  if (rate === '' || rate === undefined) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }
  const reNumber = /^[1-5]$/;
  const rateValid = reNumber.test(Number(rate));
  if (!rateValid) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  next();
};

module.exports = {
  validateAuth,
  validateName,
  validateAge,
  validateTalker,
  validateDate,
  validateRate,
};

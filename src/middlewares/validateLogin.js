const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  const re = /\S+@\S+\.\S+/;
  const validEmail = re.test(email);
  const LENGTH_PASSWORD = 6;
  
  if (!email) return res.status(400).json({ message: 'O campo "email" é obrigatório' });

  if (!validEmail) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }

  if (!password) return res.status(400).json({ message: 'O campo "password" é obrigatório' });

  if (password.length < LENGTH_PASSWORD) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }

  next();
};

module.exports = validateLogin;
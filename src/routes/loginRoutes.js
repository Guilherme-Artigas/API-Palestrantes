const { Router } = require('express');
const { generateToken } = require('../fsUtils');
const validateLogin = require('../middlewares/validateLogin');

const router = Router();

router.post(
  '/',
  validateLogin,
  async (_req, res) => res.status(200).json({ token: generateToken() }),
);

module.exports = router;
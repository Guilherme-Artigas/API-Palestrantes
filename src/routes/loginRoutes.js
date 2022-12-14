const { Router } = require('express');
const { generateToken } = require('../fsUtils');

const router = Router();

router.post('/', async (_req, res) => res.status(200).json({ token: generateToken() }));

module.exports = router;
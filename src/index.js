const express = require('express');
const talkerRoutes = require('./routes/talkerRoutes');
const loginRoutes = require('./routes/loginRoutes');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// Endpoint essencial para o avaliador funcionar! Não remove-lo!!!
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// Requisito 1
app.use('/talker', talkerRoutes);

// Requisito 2
app.use('/talker', talkerRoutes);

// Requisito 3, 4 (criação e validação da rota).
app.use('/login', loginRoutes);

// Requisito 5
app.use('/talker', talkerRoutes);

app.listen(PORT, () => {
  console.log('Online');
});

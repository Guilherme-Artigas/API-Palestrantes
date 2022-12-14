const express = require('express');
const talkerRouters = require('./routes/talkerRoutes');
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
app.use('/talker', talkerRouters);

// Requisito 2
app.use('/talker', talkerRouters);

// Requisito 3
app.use('/login', loginRoutes);

app.listen(PORT, () => {
  console.log('Online');
});

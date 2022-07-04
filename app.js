const express = require('express');
require('express-async-errors');

const handleError = require('./src/middlewares/handlerError');
const productsRoute = require('./src/routes/productsRoute');

const app = express();

app.use(express.json());

app.use('/products', productsRoute);
app.use(handleError);
// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação
module.exports = app;

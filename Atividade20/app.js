const app = require('./app/config/server');

// Importar rotas
require('./app/routes/home')(app);
require('./app/routes/contato')(app);
require('./app/routes/inscricao')(app);
require('./app/routes/programacao')(app);
require('./app/routes/sobre')(app);
require('./app/routes/novidades')(app);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
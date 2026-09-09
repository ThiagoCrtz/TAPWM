const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

// Configurar pasta pública para arquivos estáticos (CSS, imagens)
app.use(express.static('./app/public'));

// Configurar parser de formulários
app.use(express.urlencoded({ extended: true }));

module.exports = app;
let app = require("../Exercicios/app/config/server");
let texto = require("./modulo1");

app.get('/', (req, res) => {
    res.render('home/index');
});

app.get('/admin/adicionar_usuario', (req, res) => {
    res.render('admin/adicionar_usuario');
});

app.get('/informacao/historia', (req, res) => {
    res.render('informacao/historia');
});

app.get('/informacao/curso', (req, res) => {
    res.render('informacao/curso');
});

app.get('/informacao/professores', (req, res) => {
    res.render('informacao/professores');
});

app.listen(3000, () => {
    console.log(texto);
});

module.exports = app;
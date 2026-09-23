module.exports = function (app) {
    app.get('/informacao/curso', (req, res) => {
        res.render('informacao/curso')
    })
}
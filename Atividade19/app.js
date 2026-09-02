let app = require("../Exercicios/app/config/server");
let texto = require("./modulo1");

let rotaHome = require("../Exercicios/app/routes/home");
rotaHome(app);
let rotaAdicionarUsuario = require("../Exercicios/app/routes/adicionar_usuario");
rotaAdicionarUsuario(app);
let rotaCurso = require("../Exercicios/app/routes/cursos");
rotaCurso(app);
let rotaHistoria = require("../Exercicios/app/routes/historia");
rotaHistoria(app);
let rotaProfessores = require("../Exercicios/app/routes/professores");
rotaProfessores(app);


module.exports = app;
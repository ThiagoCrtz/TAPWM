const fs = require('fs');
const data = fs.readFileSync('cidades.txt');
console.log(data.toString());
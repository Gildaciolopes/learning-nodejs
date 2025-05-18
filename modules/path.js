const path = require("path");

// Apenas o nome do arquivo atual
console.log(path.basename(__filename));

// Apenas o diretório atual
console.log(path.dirname(__filename));

// Apenas a extensão do arquivo
console.log(path.extname(__filename));

// Objeto contendo o diretório atual e o nome do arquivo atual
console.log(path.parse(__filename));

// Juntar caminhos de arquivos
console.log(path.join(__dirname, "test", "test.html"));

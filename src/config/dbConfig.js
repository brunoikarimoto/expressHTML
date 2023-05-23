const mongoose = require('mongoose');
const dbConfig = "mongodb+srv://brunoikarimoto:batata123@cluster0.fxho0xm.mongodb.net/Exercicio";

const conexao = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexão funcionando.');
}).catch(err => {
    console.log(err);
})

module.exports = conexao;
const mongoose = require('mongoose');

const PessoaModelSchema = new mongoose.Schema({
    nome: String,
    cpf: {type: String, unique:true},
});

module.exports = mongoose.model("Pessoas", PessoaModelSchema);
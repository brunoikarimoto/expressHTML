const express = require('express');
const rotas = express.Router();
const PessoaController = require("./controllers/PessoaController");

rotas.get("/", function(req, res){
    res.render("index");
});
rotas.post("/", PessoaController.create);
rotas.post("/cliente", PessoaController.busca);

module.exports = rotas;
const express = require("express");
const app = express();
const ejs = require('ejs');
const rotas = require("./rotas");
require('./config/dbConfig');

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(rotas);

app.listen(3000, function(){
    console.log('Servidor rodando.');
});
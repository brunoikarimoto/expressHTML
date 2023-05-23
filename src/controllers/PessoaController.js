const Pessoa = require("../models/PessoaModel");

module.exports = {
    async create(req, res){
        const data = new Pessoa(req.body);
        const pessoaAux = await Pessoa.findOne({cpf:req.body.cpf});

        if(pessoaAux){
            res.render("cliente", {
                mensagem: "CPF já existente.",
                nome: "",
                cpf: ""
            })
            return;
        }

        await data.save();

        res.render("cliente", {
            mensagem: "Criado com sucesso",
            nome: "Nome: " + data.nome,
            cpf: "CPF: " + data.cpf
        })
    },

    async busca(req, res){
        const cpf = req.body.cpf;
        const pessoaEncontrada = await Pessoa.findOne({cpf:cpf});

        if(!pessoaEncontrada){
            res.render("cliente", {
                mensagem: "Não encontrado",
                nome: "",
                cpf: ""
            })
            return;
        }

        res.render("cliente", {
            mensagem: "Cliente encontrado",
            nome: "Nome: " + pessoaEncontrada.nome,
            cpf: "CPF: " + pessoaEncontrada.cpf
        })
    }
}
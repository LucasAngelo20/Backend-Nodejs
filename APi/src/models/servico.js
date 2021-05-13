const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servico = new Schema({
    salaoId: {
        type: mongoose.Types.ObjectId,//Indica que esta pegando o object id
        ref: 'Salao'//Usa de referencia a tabela Salao
    },
    titulo:{
        type: String,
        required: true
    },
    preco:{
        type: Number,
        required: true
    },
    comissao:{
        type: Number,// % de comissao sobre o preço
        required: true
    },
    duracao:{
        type: Number,//Duração em minuto
        required: true
    },
    recorrencia:{
        type: Number,//Periodo de refação do serviço
        required: true
    },
    descricao:{
        type: String,//Periodo de refação do serviço
        required: true
    },
    status: {
        type: String,
        enum: ['A', 'I', 'E'],
        required: true,
        default: 'A',
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
});



module.exports = mongoose.model('Servico', servico);
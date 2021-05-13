const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaboradorServico = new Schema({
    colaboradorId: {
        type: mongoose.Types.ObjectId,//Indica que esta pegando o object id
        ref: 'Colaborador',//Usa de referencia a tabela Salao
        required: true,
    },
    servicoId: {
        type: mongoose.Types.ObjectId,//Indica que esta pegando o object id
        ref: 'Servico',//Usa de referencia a tabela Salao
        required: true,
    },
    status: {
        type: String,
        enum: ['A', 'I'],
        required: true,
        default: 'A'
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
});


module.exports = mongoose.model('ColaboradorServico', colaboradorServico);
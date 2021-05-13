const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salaoColaborador = new Schema({
    salaoId: {
        type: mongoose.Types.ObjectId,//Indica que esta pegando o object id
        ref: 'Salao',//Usa de referencia a tabela Salao
        required: true,
    },
    colaboradorId: {
        type: mongoose.Types.ObjectId,//Indica que esta pegando o object id
        ref: 'Colaborador',//Usa de referencia a tabela Salao
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


module.exports = mongoose.model('SalaoColaborador', salaoColaborador);
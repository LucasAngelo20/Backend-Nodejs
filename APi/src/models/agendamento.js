const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agendamento = new Schema({
    clienteId:{
        type: mongoose.Types.ObjectId,
        ref: 'Cliente',
        required: true,

    },
    salaoId:{
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        required: true,

    },
    servicoId:{
        type: mongoose.Types.ObjectId,
        ref: 'Servico',
        required: true,

    },
    colaboradorId:{
        type: mongoose.Types.ObjectId,
        ref: 'Colaborador',
        required: true,
    },
    data: {
        type: Date,
        require: true,
    },
    comissao: {
        type: Number,
        require: true
    },
    valor: {
        type: Number,
        require: true
    },
    transactionId: {
        type: String,
        require: true
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }

});


module.exports = mongoose.model('agendamento', agendamento);
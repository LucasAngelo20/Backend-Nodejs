const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salaoCliente = new Schema({
    salaoId: {
        type: mongoose.Types.ObjectId,//Indica que esta pegando o object id
        ref: 'Salao',//Usa de referencia a tabela Salao
        required: true,
    },
    clienteId: {
        type: mongoose.Types.ObjectId,//Indica que esta pegando o object id
        ref: 'Cliente',//Usa de referencia a tabela Salao
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


module.exports = mongoose.model('salaoCliente', salaoCliente);
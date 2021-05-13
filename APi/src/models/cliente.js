const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cliente = new Schema({
    telfone: String,
    nome: {
        type: String,
        required: [true, 'Nome é obrigatório']
    },
    email: {
        type: String,
        required: [true, 'Email é obrigatório']
    },
    senha: {
        typr: String,
        default: null,
    },
    foto: String,
    status: {
        type: String,
        enum: ['A', 'I'],
        required: true,
        default: 'A'
    },
    sexo: {
        type: String,
        enum: ['M', 'F'],
        required: true
    },
    dataNascimento: {
        type: String,
        required: true
    },
    documento: {
        tipo: {
            type: String,
            enum: ['cpf', 'cnpj'],
            required: true,
        },
        numero: {
            type: String,
            required: true,
        
        },
    },
    endereco: {
        cidade: String,
        pais: String,
        numero: Number,
        cep: String,
        uf: String,
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }

});


module.exports = mongoose.model('Cliente', cliente);
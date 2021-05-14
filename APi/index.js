const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
require('./database');

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//variables
app.set('port', 8000);

//ROTAS

app.use('/salao', require('./src/routes/salao.routes'))

app.listen(app.get('port'), () => {
    console.log(`API LIGADA NA PORTA ${app.get('port')}`)
})
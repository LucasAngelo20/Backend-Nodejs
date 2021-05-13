const express = require('express');
const app = express();
const morgan = require('morgan')
require('./database');

//middlewares
app.use(morgan('dev'))

//variables
app.set('port', 8000);

app.listen(app.get('port'), () => {
    console.log(`API LIGADA NA PORTA ${app.get('port')}`)
})
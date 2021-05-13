const mongoose = require('mongoose');
const URI = '';

mongoose.ser('useNewUrlParser', true);
mongoose.ser('useFindAndModify', false);
mongoose.ser('useCreateIndex', true);
mongoose.ser('useUnifieldTopology', true);

mongoose
.connect(URI)
.then(() => console.log('DB is up!'))
.catch(() => console.log(err));
const app = require('./src/services/express');
const mongoose = require('./src/services/mongoose');


mongoose.connect();
app.start();

const express = require('express');
const bodyParser = require('body-parser');

const routes = require('../routes/myRoutes')
require('dotenv').config();

//démarrer express
const app = express();


// middleware
app.use(bodyParser.json());

//routes
routes(app)

exports.start = () => {
    const PORT = process.env.PORT || 3000

    app.listen(PORT, (err) => {
        if (err) {
            console.log(`Error:${err}`);
            process.exit(-1);
        }
        console.log(`app is running on port ${PORT}`);
    });
}

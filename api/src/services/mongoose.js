const mongoose = require('mongoose');
const config = require('../configs/db');

exports.connect = async () => {
    let url = config.url;
    let db = config.dbname;
    try { 
        await mongoose.connect
        (
            url,
            {
                useNewUrlParser: true, 
                useUnifiedTopology: true, 
                dbName: db 
            }
        ); 
        console.log(`Successfully connect to ${db}`); 
    } catch (err) { 
        console.error('error while connecting to mongodb'); 
        process.exit(1); 
    }
}

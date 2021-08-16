var account = require('./accountRoute/account');
var user = require('./userRoute/user');
var operation = require('./operationRoute/operation');
var pdf = require('./pdfRoute/pdf')


const routes = (app) => {
   app.use('/user', user);
   app.use('/account', account);
   app.use('/operation', operation);
   app.use('/pdf', pdf)
}

module.exports = routes;

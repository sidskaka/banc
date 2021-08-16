var express = require('express');
var router = express.Router();

const controller = require('../../controllers/operationController/operation');

// GET all operation
router.get(('/'), (req, res, next) => {
   // middleware
   console.log(`Request from: ${req.originalUrl}`)
   console.log(`Request type: ${req.method}`)
   next();
}, controller.getOperation);

// GET some operations
router.get(('/:accountId'), controller.getAccounts)

module.exports = router;

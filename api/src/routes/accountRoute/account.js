var express = require('express');
var router = express.Router();

const controller = require('../../controllers/accountController/account');

// GET all account
router.get(('/'), (req, res, next) => {
   // middleware
   console.log(`Request from: ${req.originalUrl}`)
   console.log(`Request type: ${req.method}`)
   next();
}, controller.getAccount);
// GET all account of an user 
router.get(('/user/:userId'), controller.getAllAccountsUser)
// POST an account
router.post(('/'), controller.addNewAccount)
// WITHDRAWAL
router.post(('/withdrawal/:numberAccount'), controller.withdrawalAccount)
// DEPOSIT
router.post(('/deposit/:numberAccount'), controller.DepositAccount)
// GET a account
router.get(('/:accountId'), controller.getAccountWithID)
// DELETE a account
router.delete(('/:accountId'), controller.deleteAccount)

module.exports = router;

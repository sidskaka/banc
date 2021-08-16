var express = require('express');
var router = express.Router();

const controller = require('../../controllers/userController/user');

// GET all user
router.get(('/'), (req, res, next) => {
   // middleware
   console.log(`Request from: ${req.originalUrl}`)
   console.log(`Request type: ${req.method}`)
   next();
}, controller.getUser);

// ADD an user
router.post(('/'), controller.addNewUser)
// DELETE an user
router.delete(('/:userId'), controller.deleteUser)

module.exports = router;

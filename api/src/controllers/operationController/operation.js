const mongoose = require('mongoose');
const OperationSc = require('../../models/operation');
const UserSc = require('../../models/user');
const AccountSc = require('../../models/account');

// operation schema
const Operation = mongoose.model('Operation', OperationSc.OperationSchema);
// user schema
const User = mongoose.model('User', UserSc.UserSchema);
// account schema
const Account = mongoose.model('Account', AccountSc.AccountSchema);

// get all operation
exports.getOperation = (req, res) => {
    Operation.find({}, (err, operations) => {
       if(err) {
           res.send(err);
       }
       res.json(operations)
   })
}
// add new operation
exports.addNewOperation = (req, res) => {
    console.log(req.body)
}
// get some accounts
exports.getAccounts = (req, res) => {
    console.log(req.params)
    Operation.find({Account: req.params.accountId}, (err, operations) => {
        console.log(operations)
        if(err) {
            res.send(err);
        }
        let data = [];
        operations.forEach((operation) => {
            User.findById(operation.User).then((user) => {
                if (!user) {
                    return res.status(404).send();
                }
                Account.findById(operation.Account).then((account) => {
                    if (!account) {
                        return res.status(404).send();
                    }
                    data.push(operations,account,user)
                    res.send(data)
                })
                
            })
        })

        /**User.findById(accounts[0].User).then((user) => {
            console.log(user)
            if (!user) {
                return res.status(404).send();
            }
            
            const data = [[accounts, user]]
            res.send(data)
        })
        res.json(operations)*/
    })
}

const mongoose = require('mongoose');
const AccountSc = require('../../models/account');
const UserSc = require('../../models/user');
const OperationSc = require('../../models/operation');

// account schema
const Account = mongoose.model('Account', AccountSc.AccountSchema);
// user schema
const User = mongoose.model('User', UserSc.UserSchema);
// operation schema
const Operation = mongoose.model('Operation', OperationSc.OperationSchema);

// all account
exports.getAccount = (req, res) => {
   Account.find({}, (err, accounts) => {
       if(err) {
           res.send(err);
       }
       res.json(accounts)
   })
}
// add new account
exports.addNewAccount = (req, res) => {
    console.log(req.body)
    let newAccount = new Account({
        Libele: req.body.Libele,
        Amount: req.body.Amount,
        User: req.body.User
    });
    //console.log(newAccount)
    User.findById(newAccount.User).then((user) => {
        console.log(user)
        if (!user) {
            return res.status(404).send();
        }
        newAccount.save()
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.status(500).send({
                message: err.message
            })
        });
        let newOperation = new Operation({
            Type: "Ouverture d'un nouveau compte",
            Amount: req.body.Amount,
            Balance: "Dépot",
            User: user._id,
            Account: newAccount._id 
        });
        newOperation.save()
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.status(500).send({
                message: err.message
            })
        });

        user.Account.push(newAccount);
        user.save();
    }).catch(() => {
        res.status(404).send();
    });
}
// withdrawal in a account
exports.withdrawalAccount = (req, res) => {
    console.log(req.body)
    Account.findById(req.body.idAccount, (err, account) => {
        console.log(account)
        if (err) {
            res.send(err);
        }
        let currentAmount = account.Amount - req.body.Amount;
        let newAccount = {
            Libele: account.Libele,
            Amount: currentAmount,
            User: account.User
        };
        Account.findOneAndUpdate({ _id: account._id }, newAccount, { new: true }, (err, account) => {
            if (err) {
                res.send(err);
            }
            let newOperation = new Operation({
                Type: "Retrait",
                Amount: req.body.Amount,
                Balance: "Retrait",
                User: account.User,
                Account: req.body.idAccount
            });
            newOperation.save()
            .then(data => {
                res.send(data)
            }).catch(err => {
                res.status(500).send({
                    message: err.message
                })
            });
            res.json(account);
        });
    });
}
// deposit in a account
exports.DepositAccount = (req, res) => {
    console.log(req.body)
    Account.findById(req.body.idAccount, (err, account) => {
        console.log(account)
        if (err) {
            res.send(err);
        }
        let currentAmount = account.Amount + parseInt(req.body.Amount);
        let newAccount = {
            Libele: account.Libele,
            Amount: currentAmount,
            User: account.User
        };
        console.log(newAccount)
        Account.findOneAndUpdate({ _id: account._id }, newAccount, { new: true }, (err, account) => {
            if (err) {
                res.send(err);
            }
            let newOperation = new Operation({
                Type: "Dépôt",
                Amount: req.body.Amount,
                Balance: "Dépôt",
                User: account.User,
                Account: req.body.idAccount
            });
            newOperation.save()
            .then(data => {
                res.send(data)
            }).catch(err => {
                res.status(500).send({
                    message: err.message
                })
            });
            res.json(account);
        });
    });
}
// get all accounts of an user
exports.getAllAccountsUser = (req, res) => {
    //console.log(req.params.userId);
    Account.find({User: req.params.userId}, (err, accounts) => {
        
        if(err) {
            res.send(err);
        }
        console.log(accounts.length)
        if(accounts.length !== 0) {
            User.findById(accounts[0].User).then((user) => {
                console.log(user)
                if (!user) {
                    return res.status(404).send();
                }
                
                const data = [[accounts, user]]
                res.send(data)
            })
        }else{
            res.send(accounts)
        }
    })
}
// get a account
exports.getAccountWithID = (req, res) => {
    Account.findById(req.params.accountId, (err, account) => {
        if (err) {
            res.send(err);
        }
        User.findById(account.User).then((user) => {
            console.log(user)
            if (!user) {
                return res.status(404).send();
            }
            
            const data = [account, user]
            res.send(data)
        })
        //res.json(account);
    });
}
// delete a account
exports.deleteAccount = (req, res) => {
    Account.remove({ _id: req.params.accountId}, (err, account) => {
        if(err) {
            res.send(err);
        }
        Operation.remove({ Account: req.params.accountId}, (err, operation) => {
            if(err) {
                res.send(err);
            }
        })
        res.json({ message: "Successfully deleted account" })
    });
}
    
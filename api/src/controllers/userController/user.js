const mongoose = require('mongoose');
const UserSc = require('../../models/user');

// user schema
const User = mongoose.model('User', UserSc.UserSchema);

// all user
exports.getUser = (req, res) => {
   User.find({}, (err, users) => {
       if(err) {
           res.send(err);
       }
       res.json(users)
   })
}
// add new user
exports.addNewUser = (req, res) => {
    console.log(req.body)
    let newUser = new User({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName
    });
    newUser.save((err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
}
// delete one user
exports.deleteUser = (req, res) => {
    User.remove({ _id: req.params.userId}, (err, user) => {
        if(err) {
            res.send(err);
        }
        res.json({ message: "Successfully deleted user" })
    });
}


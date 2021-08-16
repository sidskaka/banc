const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    FirstName: {
        type: String
    },
    LastName: {
        type: String
    },
    Account: [{ type: Schema.Types.ObjectId, ref: 'Account' }],
    created_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', UserSchema)

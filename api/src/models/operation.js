const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OperationSchema = new Schema({
    Type: {
        type: String
    },
    Amount: {
        type: Number
    },
    Balance: {
        type: String
    },
    User: { type: Schema.Types.ObjectId, ref: 'User' },
    Account: { type: Schema.Types.ObjectId, ref: 'Account' },
    created_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Operation', OperationSchema)

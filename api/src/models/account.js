const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AccountSchema = new Schema({
    Libele: {
        type: String
    },
    Amount: {
        type: Number
    },
    User: { type: Schema.Types.ObjectId, ref: 'User' },
    created_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Account', AccountSchema)

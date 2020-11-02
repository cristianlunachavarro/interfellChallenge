const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let walletSchema =  new Schema ({
    number: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

const Wallet =  mongoose.model('wallets', walletSchema)

module.exports = Wallet
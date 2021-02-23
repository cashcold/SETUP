const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_Name: {
        type: String,
        require: true,
    },
    plan: {
        type: String,
        require: true,
    },
    depositAmount: {
        type: String,
        require: true,
    },
    bitcoin: {
        type: String,
    },
    bitcoinCash: {
        type: String,
    },
    ethereum: {
        type: String,
    }
    ,
    Date:{
        type: Date,
        default: Date.now
    }
    
})

const UserDeposit = mongoose.model('UserDeposit', userSchema)

module.exports = UserDeposit;
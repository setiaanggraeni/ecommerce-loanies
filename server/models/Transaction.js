const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TransactionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    totalBuy: {
        type: Number,
        required: true
    },
    totalItem: {
        type: Number,
        required: true
    }
})

const transaction = mongoose.model('transactions', TransactionSchema)
module.exports = transaction
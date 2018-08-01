const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    price: {
        type: String
    },
    brand: {
        type: String
    },
    description: {
        type: String
    },
    imgurl: {
        type: String
    },
    category: {
        type: String
    }
})

const Product = mongoose.model('products', ProductSchema)
module.exports = Product
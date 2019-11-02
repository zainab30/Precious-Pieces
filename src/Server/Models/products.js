const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating product Schema and model
const ProductSchema = new Schema({
    title: {
        type: String,
        required: [true,'Title field id required']
    },   
    desc: {
        type: String,
        required: [true,'Desc field id required']
    },
    price: {
        type: Number,
        required: [true,'Price field id required']
    },
    img: {
        type: String,
        required: [true,'Img field id required']
    }
});

const Products = mongoose.model('products', ProductSchema);

module.exports = Products
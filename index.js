const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb');

// creating a new schema object
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
});

// creating a model instance
const Product = mongoose.model('Product', productSchema)

// inserting a new product object instance.
const product = new Product({
    name: 'iPhone 14 pro max',
    price: 'ksh.120,000',
    notInSchema: true,
});

console.log("The product is "+product.name, "and the price is "+product.price);
console.log(product.notInSchema)
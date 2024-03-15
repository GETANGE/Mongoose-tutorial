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
const schema2 = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    price: {
        type: Number,
        required: true
    },
})
// creating a model instance
const Product = mongoose.model('Product', productSchema)
const Product2 = mongoose.model('Product2', schema2)

// inserting a new product object instance. => document.
const product = new Product({
    name: 'iPhone 14 pro max',
    price: 'ksh.120,000',
    notInSchema: true, 
});
const product2 = new Product2({
    name: 'IPhone 14 pro max',
    price: 120000,
    notInSchema: true, 
});

// product2.save();
// product.save();

console.log("The product is "+product.name, "and the price is "+product.price);
console.log("This product will not appear in the schema "+product.notInSchema)

console.log("product 2 name property is lowercased");

let products = Product.find();
product.name;
console.log(products.name)
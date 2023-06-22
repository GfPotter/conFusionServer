const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose); // this will load the new currency type into mongoose
const Currency = mongoose.Types.Currency; // this will get the currency type from mongoose
const commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1, // this field must be greater than or equal to 1
        max: 5, // this field must be less than or equal to 5
        required: true // this field is required
    },
    comment: {
        type: String,
        required: true // this field is required
    },
    author: {
        type: String,
        required: true // this field is required
    }
}, { timestamps: true } // this will automatically add the two fields createdAt and updatedAt
);


const dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true // this field must be unique
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    label: {
        type: String,
        default: ''
    },
    price: {
        type: Currency,
        required: true,
        min: 0
    },
    featured: {
        type: Boolean,
        default: false
    },

    comments: [commentSchema] // this is a sub-document

}, { timestamps: true } // this will automatically add the two fields createdAt and updatedAt
);

var dishes = mongoose.model('Dish', dishSchema);
module.exports = dishes;

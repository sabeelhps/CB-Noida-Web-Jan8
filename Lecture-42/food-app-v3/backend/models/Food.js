const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    desc: {
        type: String,
        required: true,
        trim: true
    }
},{versionKey: false, timestamps: true});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
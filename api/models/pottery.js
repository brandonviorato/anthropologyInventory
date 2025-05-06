const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const potterySchema = new Schema({
    category: {
        type: String,
        required: true
    },
    anthropologist: {
        type: String,
        required: true
    },
    regionFound: {
        type: String,
        required: true
    },
    countryFound: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: true
    },   
    description:{
        type: String,
        required: false
    },
    notes:{
        type: String,
        required: false
    },
    activeValue: {
        type: Number,
        required: false
    },
    paidValue: {
        type: Number,
        required: false
    },
    dateOfPurchase: {
        type: String,
        required: false
    },
    purchaser: {
        type: String,
        required: false
    },
    images: [{type: String}] // array containing relative image paths

}, { timestamps: true });

const Pottery = mongoose.model('Pottery', potterySchema);

module.exports = Pottery;
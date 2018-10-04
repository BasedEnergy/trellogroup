const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CardSchema = new Schema({
   
    card:{
        type: String,
        unique: true,
        required: "need something"
    }

});

const Cards = mongoose.model('CardModel', CardSchema);

module.exports = Cards;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CardSchema = new Schema({
   
    card:{
        type: String,
        unique: true,
        required: "need something"
    }

});


var Cards = mongoose.model('Cards', CardSchema);


module.exports = Cards;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Cards = new Schema({

    Card: {
        type: String,
        unique: true,
        trim: true,
    }

});

const Cards = mongoose.model('ToDoModel', Cards);

module.exports = Cards;
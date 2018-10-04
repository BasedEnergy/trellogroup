const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Cards = new Schema({

    card: {
        type: String,
        unique: true,
        trim: true,
    }

});

const CardModel = mongoose.model('ToDoModel', Cards);

module.exports = CardModel;
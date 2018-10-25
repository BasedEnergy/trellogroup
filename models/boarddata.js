const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BoardSchema = new Schema({

    board:{
        type: String,
        required: true
    },

    star:{
        type: Boolean
    },

    color:{
        type: String,
    }

});

var Boards = mongoose.model('Boards', BoardSchema);

module.exports = Boards;
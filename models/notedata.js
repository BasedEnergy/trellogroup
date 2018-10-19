const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    note:{
        type: String,
        required: true
    },
});

var Notes = mongoose.model('Notes', NoteSchema);

module.exports = Notes;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listSchema = new Schema({
    itemName: {
        type: String,
        unique: true,
        required: [true, 'Enter a list name']
    }
});

let listItem = mongoose.model('listItem', listSchema);

module.exports = listItem;

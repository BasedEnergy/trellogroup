const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ListSchema = new Schema({

    list: {
        type: String,
        unique: true,
        required: [true, "Enter a valid list item"]
    }

});

const Lists = mongoose.model('Lists', ListSchema);

module.exports = Lists;

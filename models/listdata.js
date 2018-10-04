const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ListSchema = new Schema({

    list:{
        type: String,
        unique: true,
        required: "need something"
    }

});

const Lists = mongoose.model('ListModel', ListSchema);

module.exports = Lists;
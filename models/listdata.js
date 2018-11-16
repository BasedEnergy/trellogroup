

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ListSchema = new Schema({

    list: {
        type: String,
        required: true
    },
    
    boardid: {
        type: String,
    },

});


const Lists = mongoose.model('Lists', ListSchema);


module.exports = Lists;
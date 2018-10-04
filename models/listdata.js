const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ListSchema = new Schema({

    list:{
        type: String,
        unique: true,
        require: "need something"
    }

});


var Lists = mongoose.model('Lists', ListSchema);


module.exports = Lists;
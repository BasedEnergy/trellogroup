const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ListSchema = new Schema({

    list:{
        type: String,
        unique: true,
        trim: true,
        required: "need something",
        cards:[
            {
                type: String,
                unique: true,
                trim:true,
                required: "need something",
            }
        ],
    }

});


const Lists = mongoose.model('Lists', ListSchema);


module.exports = Lists;
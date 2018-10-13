const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema ({
    username: {
        type: String,
        required: [true, "Username required"],
        unique: [true, 'Username taken'],
        trim: true,
        min: 4,
        max: 16
    },
    password: {
        type: String,
        required: [true, "Password required"],
        trim: true,
        min: 4,
        max: 16
    },
    list: [
        {
          type: Schema.Types.ObjectId,
          ref: "Lists"
        }
      ]
});
const User = mongoose.model('User', userSchema);
module.exports = User;

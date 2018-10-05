// Imports express into our info.app and sets it up for use
const express = require('express');

var info = {
    app: undefined,
    db: undefined,
    COLLECTION: undefined,
    ObjectID: undefined,
    Item: undefined
};

//MongoDB requirements
const mongoose = require('mongoose');
info.ObjectID = mongoose.Types.ObjectId;
info.COLLECTION = 'trelloclone';
// const MONGODB_URI = 'mongodb://trellogroup:trello123@ds121203.mlab.com:21203/heroku_906ff17q';
const MONGODB_URI = mongoose.connect('mongodb://localhost/trellodata',{useNewUrlParser: true});


info.app = express();

// make express look in the public directory for assets (css/js/img)
info.app.use(express.static(__dirname + '/public'));


const bodyParser = require('body-parser');
// Sets up our server to parse our request body for usage
info.app.use(bodyParser.json());
info.app.use(bodyParser.urlencoded({ extended: true }));

// Routes

require('./routes/api-routes.js')(info.app);

// Connect to the database before starting the info.application server.
mongoose.connect(MONGODB_URI,{ useNewUrlParser: true }, function (err, database) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    info.db = database;

    console.log("Database connection ready");

    // Starts our server on the predefined PORT
    //Using process.env.PORT to allow Heroku to dynamically choose its own port
    info.app.listen(process.env.PORT || 8080, function(){
        console.log(`app is now listening on PORT `+ process.env.PORT);
    });
});

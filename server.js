const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost/todolist', { useNewUrlParser: true });

require('./routes/routes')(app);

app.listen(PORT, function() {
    console.log(`App is now listening on PORT: ${PORT}`)
})
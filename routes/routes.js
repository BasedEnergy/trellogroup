const cards = require('../models/cards')

module.exports = function(app){

    app.get('/api/data', function (app) {
        cards.cards.find({})
            .then(function (dbcards) {
                res.json(dbcards);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

};
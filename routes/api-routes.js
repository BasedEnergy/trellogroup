const db = require('../models/index');

/*
1-board routes
2-List routes
3-Card routes
4-Note routes
*/

module.exports = function (app) {
    /*1*/
    app.get('/api/boards', function (req, res) {
        db.Boards.find({})
            .then(function (lists) {
                res.json(lists);
            })
            .catch(function (err) {
                res.json(err);
            });
    });
    /*2*/
    app.get('/api/lists', function (req, res) {
        db.Lists.find({})
            .then(function (lists) {
                res.json(lists);
            })
            .catch(function (err) {
                res.json(err);
            });
    });
    /*3*/
    app.get('/api/cards', function (req, res) {
        db.Cards.find({})
            .then(function (cards) {
                res.json(cards);
            })
            .catch(function (err) {
                res.json(err);
            })
    });
    /*4*/
    app.get('/api/notes', function (req, res) {
        db.Notes.find({})
            .then(function (notes) {
                res.json(notes);
            })
            .catch(function (err) {
                res.json(err);
            })
    });

    app.post('/api/boards', function (req, res) {
        db.Boards.create(req.body)
            .then(function (notes) {
                res.json(notes)
            })
            .catch(function (err) {
                res.json(err);
            });
    })

    app.post('/api/lists', function (req, res) {
        db.Lists.create(req.body)
            .then(function (lists) {
                res.json(lists);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.post('/api/cards', function (req, res) {
        db.Cards.create(req.body)
            .then(function (cards) {
                res.json(cards)
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.post('/api/notes', function (req, res) {
        db.Notes.create(req.body)
            .then(function (notes) {
                res.json(notes)
            })
            .catch(function (err) {
                res.json(err);
            });
    })

    // app.put('/api/cards', function (req, res) {
    //     db.Cards.findOneAndUpdate({ _id : req.body._id }, { $set: { card: req.body.card } })
    //         .populate('cards')
    //         .then(function (cards) {
    //             res.json(cards);
    //         })
    //         .catch(function (err) {
    //             res.json(err);
    //         });
    // });

    // app.put('/api/lists', function (req, res) {
    //     db.Lists.findOneAndUpdate({ _id: req.body._id }, { $set: { list: req.body.list } })
    //         .then(function (lists) {
    //             res.json(lists);
    //         })
    //         .catch(function (err) {
    //             res.json(err);
    //         });
    // });

    app.delete('/api/boards', function (req, res) {
        db.Boards.findOneAndDelete(req.body)
            .then(function (lists) {
                res.json(lists);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.delete('/api/notes', function (req, res) {
        db.Notes.findOneAndDelete(req.body)
            .then(function (deleteNote) {
                res.json(deleteNote);
            })
            .catch(function (err) {
                res.json(err)
            });
    })

    app.delete('/api/cards', function (req, res) {
        db.Cards.findOneAndDelete(req.body)
            .then(function (deleteCard) {
                res.json(deleteCard);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.delete('/api/lists', function (req, res) {
        db.Lists.findOneAndDelete(req.body)
            .then(function (lists) {
                res.json(lists);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

}
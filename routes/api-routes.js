const db = require('../models/index');

/*
1-List routes
2-Card routes
3-note routes
*/

module.exports = function (app) {
/*1*/
    app.get('/api/lists', function (req, res) {
        db.Lists.find({})
            .populate('cards')
            .then(function (lists) {
                res.json(lists);
            })
            .catch(function (err) {
                res.json(err);
            });
    });
/*2*/
    app.get('/api/lists/:id', function (req, res) {
        db.Lists.find({ _id: req.params.id })
            .populate('cards')
            .then(function (list) {
                console.log(list);
                res.json(list);
            })
            .catch(function (err) {
                res.json(err);
            })
    });
/*3*/
    app.get('/api/cards/:id', function (req, res) {
        db.Cards.find({ _id: req.params.id })
            .populate('notes')
            .then(function (list) {
                res.json(list);
            })
            .catch(function (err) {
                res.json(err);
            })
    });

    app.post('/api/lists', function (req, res) {
        db.Lists.create(req.body)
            .then(function (lists) {
                res.json(lists);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.post('/api/lists/:id', function (req, res) {
        db.Cards.create(req.body)
            .then(function (dbcards) {
                // console.log(dbcards);
                db.Lists.findOneAndUpdate({ _id: req.params.id }, { $push: { cards: dbcards._id } }, { new: true })
                    .then(newListInfo => {
                        res.json({ list: newListInfo, newCardInfo: dbcards });

                    })
            })
    });

    app.post('/api/cards/:id', function (req, res) {
        db.Notes.create(req.body)
            .then(function (dbnotes) {
                db.Cards.findOneAndUpdate({ _id: req.params.id }, { $push: { notes: dbnotes._id } }, { new: true })
                    .then(newCardInfo => {
                        res.json({ list: newCardInfo, newNoteInfo: dbnotes });
                    })
            })
    })

    app.put('/api/cards', function (req, res) {
        db.Cards.findOneAndUpdate({ _id : req.body._id }, { $set: { card: req.body.card } })
            .populate('cards')
            .then(function (cards) {
                res.json(cards);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.put('/api/lists', function (req, res) {
        db.Lists.findOneAndUpdate({ _id: req.body._id }, { $set: { list: req.body.list } })
            .then(function (lists) {
                res.json(lists);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.delete('/api/cards/:id', function(req,res) {
        db.Notes.findOneAndDelete(req.body)
            // .populate('notes')
            .then(function (deleteNote) {
                db.Cards.findOneAndDelete({_id: req.params.id}, {$pull: {'card.notes' : {body:deleteNote}}})
                res.json(deleteNote);
            })
            .catch(function (err) {
                res.json(err)
            });
    })

    app.delete('/api/lists/:id', function (req, res) {
        // const deleteid = req._id;
        db.Cards.findOneAndDelete(req.body)
            // .populate('cards')
            .then(function (deleteCard) {
                db.Lists.findOneAndUpdate({_id: req.params.id}, {$pull: {'list.cards' : {body :deleteCard}}});
                
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

    app.put('/api/lists/:id', function (req, res) {
        console.log(req.params.id);
        db.Cards.findOneAndUpdate({ _id: req.body.cardid }, { $set: { listid: req.params.id } })
            .then(function (lists) {
                res.json(lists);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

}
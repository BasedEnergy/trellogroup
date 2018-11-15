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

    app.get('/api/lists/:id', function (req, res) {
        db.Lists.find({ _id: req.params.id })
            .populate('cards')
            .then(function (list) {
                res.json(list);
            })
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
    })
    app.get('/api/notes', function (req, res) {
        db.Notes.find({})
            .then(function (notes) {
                res.json(notes);
            })
            .catch(function (err) {
                res.json(err);
            })
    });

    app.get('/api/userLists/:userId', function (req, res) {
        db.User.find({ _id: req.params.userId })
            .populate('list')
            .then(function (result) {
                res.json(result);
            })
            .catch(function (err) {
                res.json(err);
            })
    });

    app.get('/api/users', function (req, res) {
        db.User.find(req.query)
            .then(function (dbUser) {
                res.json(dbUser);
            })
            .catch(function (err) {
                res.json(err);
            })
    })

    app.post('/api/users', function (req, res) {
        db.User.create(req.body)
            .then(function (dbUser) {
                res.json(dbUser);
            })
            .catch(function (err) {
                res.json(err);
            })
    })

    app.post('/api/lists/:id', function (req, res) {
        db.Cards.create(req.body)
            .then(function (dbcards) {
                db.Lists.findOneAndUpdate({ _id: req.params.id }, { $push: { cards: dbcards._id } }, { new: true })
                    .then(newListInfo => {
                        res.json({ list: newListInfo, newCardInfo: dbcards });
                    })
                })
            })
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
        db.Lists.create({ list: req.body.list })
            .then(function (dbList) {
                return db.User.findOneAndUpdate({ _id: req.body._id }, { $push: { list: dbList._id } }, { new: true });
            })
            .catch(function (err) {
                res.json(err);
            });
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
    //post route for finding a specific user
    app.post('/api/login', function (req, res) {
        db.User.findOne(req.body).where('password').equals(req.body.password)
            .then(function (user) {
                if (!user) {
                    res.json(user);
                } else {
                    res.json(user);
                }
            })
            .catch(function (err) {
                res.json(err)
            })
    })

    app.put('/api/notes', function (req, res) {
        db.Notes.findOneAndUpdate({ _id: req.body._id }, { $set: { note: req.body.card } })
            .populate('noteincard')
            .then(function (notes) {
                res.json(notes)
            })
            .catch(function (err) {
                res.json(err);
            })
    })

    // app.put('/api/cards', function (req, res) {
    //     db.Cards.findOneAndUpdate({ _id: req.body._id }, { $set: { card: req.body.card } })
    //         .populate('cards')

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

    app.put('/api/cards', function (req, res) {
        db.Cards.findOneAndUpdate({card: req.body.card}, { $set: { listid: req.body.listid } })
            .populate('cards')
            .then(function (cards) {
                res.json(cards);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

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
                    
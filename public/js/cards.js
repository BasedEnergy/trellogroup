const cardFunctions = {

    // Renders the card in its designated list
    render: function (card) {
        $('/**/').append(card);
        console.log(`Rendered Card: ${card}`)
    },

    // This function receives a list and formats it before sending it to render
    makeNewCard: function (data) {
        let newCard = '';
        data.forEach(e => function() {
            newCard.append(`<li>${data.card}</li>`);
            newCard.on('click', function() { cardFunctions.updateCard(this); });
            render(newCard);
            console.log(`Card String: ${data.card}`);
        });
    },

    // This function gets all card data and sends it to makeNewCard()
    getCards: function () {
    $.ajax({ url: '/api/data', method: 'GET' })
        .then(function (data) {
            cardFunctions.makeNewCard(data);
        })
        .catch(function (err) {
            console.log(err);
            alert('Couldnt get cards');
        })
    }, /* <-- notice the coma */

    postCard: function () {
    $.ajax({ url: '/api/data', method: 'POST'})
        .then(function(card) {
            
        })
        .catch(function(err) {
            res.json(err);
        });
    },

    updateCard: function () {
    $.ajax({ url: '/api/data', method: 'PUT'})
        .then(function(card) {

        })
        .catch(function(err) {
            res.json(err);
        })
    },
}

$(document).ready(function () {
    cardFunctions.getCards();
})
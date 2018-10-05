const cardFunctions = {

    render: function (card) {
        $('/**/').append(card);
        console.log(`Rendered Card: ${card}`)
    },

    makeNewCard: function () {
        let newCard = '';
        data.forEach(e => function() {
            newCard.append(`<li>${data.card}</li>`);
            render(newCard);
            console.log(`Card String: ${newCard}`);
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

    // postCard: function () {
    // $.ajax({ url: '/api/data', method: 'POST'})
    //     .then(/* post functions */)
    // },

    // putCard: function () {
    // $.ajax({ url: '/api/data', method: 'PUT'})
    //     .then(/* put functions */)
    // },
}

$(document).ready(function () {
    cardFunctions.getCards();
})
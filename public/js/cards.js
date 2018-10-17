const cardFunctions = {

    // This function gets all card data and sends it to makeNewCard()
    getCards: function () {
        $.ajax({ url: '/api/cards', method: 'GET' })
        .then(function (dataList) {
            $('.locateCard').html('')
            console.log(dataList)
            dataList.forEach(e => {
                $('.locateCard').append(
                    $('<li>').append(
                        $('<div>').addClass('card').append(
                            $('<div>').addClass('card').append(
                                $('<p>').append(e.card),
                            ),
                            $('<div>').addClass('cardEdit').append(
                                $('<i>').addClass('fas fa-pen')
                            ),
                            $('<div>').addClass('cardDelete').append(
                                $('<i>').addClass('fas fa-trash-alt').attr('data-id', `${e._id}`)
                            )
                        )
                    )
                )
            })
        })  
    },

    postCard: function () {
    let newData = {
        card: $('#addCardInput').val().trim()
    }
    $.ajax({ url: '/api/list', method: 'GET'})
        .then( function(listData) {
            listData.foreach(e => {
                $.ajax({ url: `/api/list/${e._id}`, method: 'POST', data: newData })
                // $.ajax({ url: `/api/list/${data._id}`, method: 'POST', data: newData })
                //     .then (function (data) {
                //     if (data._id) {
                //         cardFunctions.getCards();
                //     } else {
                //         alert('nope');
                //         return;
                //     }
            })
        })
    },

    updateCard: function () {
    $.ajax({ url: '/api/cards', method: 'PUT' })
        .then(function(card) {

        })
        .catch(function(err) {
            res.json(err);
        })
    },

    removeCard: function() {
        const deleteID = $(event.target).attr('data-id');
        $.ajax({ url: '/api/cards', method: 'DELETE' })
        .then(function() {
            $(`#${deleteID}`).remove();
        })
        cardFunctions.getCards()
    }
}


$(document).ready(function () {
    cardFunctions.getCards();
    let input = $('#addCardInput').val()
        $(document).on('click', '.fa-trash-alt', function() {
            cardFunctions.removeCard()
        });

        $(document).on('click', '#addCardButton', function() {
            if (input === '') {
                alert('AHHHHHHHHHH')
            } else {
                cardFunctions.postCard();
                $(this).parent().parent().replaceWith(
                    $('<footer>')
                        .text('Add a card...')
                        .attr('id', 'clickAddCard'),
                );
            }
        });

        $(document).on('click', '#cancelButton', function() {
            $('<footer>').html('')
            $(this).parent().parent().replaceWith(
                $('<footer>')
                    .addClass('footer')
                    .text('Add a card...')
                    .attr('id', 'clickAddCard'),
            );
        });  

        $(document).on('click', '#clickAddCard', function() {
            $('.footer').html('').text('Add a card...').attr('id', 'clickAddCard')
            $(this).replaceWith(
                $('<footer>').append(
                $('<input>').attr('id', 'addCardInput')).append(
                    $('<div>').addClass('addCardField').append(
                        $('<button>').attr('id', 'addCardButton').text('add card'),
                        $('<i>').addClass('fas fa-times fa-2x').attr('id', 'cancelButton') 
                    )
                )
                
            );
        })

});
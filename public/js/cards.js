$(function () {

    $('.locateCard').html('');
    
    const renderCards = function () {
        $('.locateCard').html('');
        $.get('/api/cards')
            .then(function (dataList) {
                console.log(dataList)
                dataList.forEach(e => {
                    $('.lists').children(`.list[ id=${e.listid} ]`).children('.locateCard').append(
                        $('<li>').attr('listid', `${e.listid}`).attr('id', `${e._id}`).append(
                            $('<div>').addClass('card').append(
                                $('<p>').append(e.card)
                            ),
                            $('<div>').addClass('cardEdit butt').append(
                                $('<i>').addClass('fas fa-pen icon')
                            ),
                            $('<div>').addClass('cardComment butt').append(
                                $('<i>').addClass('far fa-comment icon')
                            ),
                            $('<div>').addClass('cardDelete butt').attr('data-id', `${e._id}`).append(
                                $('<i>').addClass('fas fa-trash-alt icon')
                            )
                        )
                    )
                })
            })
    }

    const addCard = function (id) {
        let newCard = {
            card: $('#addCardInput').val().trim(),
            listid: id
        }
        $.ajax({ url: '/api/cards', method: 'POST', data: newCard });
        renderCards();
    }

    const editCard = function (card, cardid) {
        let newCard = {
            card: card,
            _id: cardid
        }
        $.ajax({ url: '/api/cards', method: 'PUT', data: newCard })
    }

    const deleteCard = function (deleteID) {
        $.ajax({ url: '/api/cards/' + `${deleteID}`, method: 'DELETE' })
            .then(
                $(`#${deleteID}`).remove()
            )
    }

    /*
    =======FUNCTIONS=======
    =======================
    ====EVENT LISTENERS====
    */

    $(document).on('click', '.editCancel', function () {
        renderCards();
    });

    $(document).on('click', '.editCheck', function () {
        let card = $('#editCardInput').val().trim();
        let cardid = $(this).parent().parent().attr('id')
        editCard(card, cardid);
        renderCards();
    });

    $(document).on('click', '.fa-pen', function () {
        let card = $(this).parent().parent()
        card.html('')
        card.append(
            $('<div>').addClass('editInput').append(
                $('<input>').attr('id', 'editCardInput')
            ),
            $('<div>').addClass('editCheck butt').append(
                $('<i>').addClass('fas fa-check icon editCheck')
            ),
            $('<div>').addClass('editCancel butt').append(
                $('<i>').addClass('fas fa-times icon editCancel')
            ),
        );
    });

    $(document).on('click', '.cardDelete', function () {
        let deleteID = $(this).attr('data-id');
        deleteCard(deleteID)
    });

    $(document).on('click', '#addCardButton', function () {
        let id = $(this).parent().parent().parent().attr('id');
        addCard(id);
        $(this).parent().parent().replaceWith(
            $('<footer>').text('Add a card...').attr('id', 'clickAddCard'),
        );
    });

    $(document).on('click', '#cancelButton', function () {
        $(this).parent().parent().replaceWith(
            $('<footer>').addClass('footer').text('Add a card...').attr('id', 'clickAddCard'),
        );
    });

    $(document).on('click', '#clickAddCard', function () {
        $('footer').html('').text('Add a card...').attr('id', 'clickAddCard')
        $(this).replaceWith(
            $('<footer>').append(
                $('<input>').attr('id', 'addCardInput')).append(
                    $('<div>').addClass('addCardField').append(
                        $('<button>').attr('id', 'addCardButton').text('add card'),
                        $('<i>').addClass('fas fa-times fa-2x').attr('id', 'cancelButton')
                    )
                )

        );
    });

    /*
    ====EVENT LISTENERS====
    =======================
    =======================
    */

    renderCards()
})
$(function () {

    const renderCards = function () {
        $('.locateCard').html('');
        $.get('/api/cards')
            .then(function (dataList) {
                console.log(dataList)
                dataList.forEach(e => {
                    $('.lists').children(`.list[ id=${e.id} ]`).children('.locateCard').append(
                        $('<li>').attr('id', `${e.id}`).append(
                            $('<div>').addClass('card').append(
                                $('<p>').append(e.card)
                            ),
                            $('<div>').addClass('cardEdit').append(
                                $('<i>').addClass('fas fa-pen')
                            ),
                            $('<div>').addClass('cardComment').append(
                                $('<i>').addClass('far fa-comment')
                            ),
                            $('<div>').addClass('cardDelete').append(
                                $('<i>').addClass('fas fa-trash-alt').attr('data-id', `${e.id}`)
                            )
                        )
                    )
                })
            })
    }

    const addCard = function (id) {
        let newCard = {
            card: $('#addCardInput').val().trim(),
            id: id
        }
        $.ajax({ url: '/api/cards', method: 'POST', data: newCard });
        renderCards();
    }

    const deleteCard = function (deleteID) {
        $.ajax({ url: `/api/cards/${deleteID}`, method: 'DELETE' });
        renderCards();
    }

    /*
    =======FUNCTIONS=======
    =======================
    ====EVENT LISTENERS====
    */

    $(document).on('click', '.fa-trash-alt', function () {
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
        $('footer').html('')
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


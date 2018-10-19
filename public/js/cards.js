const cardFunctions = {

    renderCard: function (listid) {
        $.ajax({ url: `/api/lists/${listid}`, method: 'GET' })
            .then(function (dataList) {
                let cardList = $(`ul[ listid=${listid} ]`).addClass('listOfCards')
                cardList.empty();
                dataList[0].cards.forEach(eachCard =>
                    cardList.append(
                        $('<li>').attr('draggable', 'true').attr('listid', `${listid}`).attr('cardid', `${eachCard._id}`).addClass('dragCard containers').attr('id', `${eachCard.card}`).append(
                            $('<div>').addClass('card').append(
                                $('<p>').append(eachCard.card)
                            ),
                            $('<div>').addClass('cardEdit butt').append(
                                $('<i>').addClass('fas fa-pen icon')
                            ),
                            $('<div>').addClass('cardComment butt').attr('id', 'modal').attr('cardid', `${eachCard._id}`).attr('data-name', `${eachCard.card}`).append(
                                $('<i>').addClass('far fa-comment icon')
                            ),
                            $('<div>').addClass('cardDelete butt').attr('cardid', `${eachCard._id}`).append(
                                $('<i>').addClass('fas fa-trash-alt icon')
                            )
                        )
                    )
                )
            })
    },

}

$(document).ready(function () {

    $(document).on('click', '#cancelButton', function () {
        let listid = $(this).parent().parent().attr('listid')
        $(this).parent().parent().replaceWith(
            $('<footer>').text('Add a card...').addClass('containers').attr('id', 'clickAddCard').attr('listid', `${listid}`)
        )
    });

    $(document).on('click', '#clickAddCard', function () {
        $('footer').text('Add a card...').addClass('containers').attr('id', 'clickAddCard')
        $(this).empty();
        let listid = $(this).parent().attr('listid');
        $(this).attr('id', '..adding card..').append(
            $('<div>').addClass('addCardField').append(
                $('<textarea>').attr('id', 'addCardInput')),
            $('<div>').addClass('flex').append(
                $('<button>').attr('id', 'addCardButton').attr('listid', `${listid}`).text('Add Card'),
                $('<div>').attr('id', 'cancelButton').addClass('butt flex').append(
                    $('<i>').addClass('fas fa-times')
                )
            )
        )
    });

    $(document).on('click', '.cardEdit', function () {
        $(document).bind('cardEdit', function () {
            $(document).off('click', '.cardEdit');
        });
        const cardid = $(this).parent().attr('cardid')
        const card = $(this).parent($(this).parent($(this).children('li')));
        card.replaceWith(
            $('<li>').attr('cardid', `${cardid}`).addClass('dragCard').append(
                $('<div>').addClass('editInput').append(
                    $('<input>').attr('placeholder', "Type in your card..").addClass('cardEditInput'),
                ),
                $('<div>').attr('cardid', `${cardid}`).addClass('cardEditCheck butt').append(
                    $('<i>').addClass('fas fa-check icon editCheck')
                ),
                $('<div>').attr('cardid', `${cardid}`).addClass('cardEditCancel butt').append(
                    $('<i>').addClass('fas fa-times icon editCancel')
                ),
            )
        );
    })

    $(document).on('click', '.cardEditCheck', function () {
        const newCard = $('.cardEditInput').val().trim()
        const id = $(this).attr('cardid')
        const newData = {
            card: newCard,
            _id: id
        }

        $.ajax({ url: `/api/cards`, method: 'PUT', data: newData })
            .then(function () { listFunctions.renderList() })
    });

    $(document).on('click', '.editCancel', function () {
        listId = $(this).parent().parent().parent().attr('listid')
        cardFunctions.renderCard(listId);
    });

    $(document).on('click', '.cardDelete', function () {
        let card = $(this).parent()
        const whichCard = $(this).attr('cardid');
        const fromList = $(this).parent().parent().parent().attr('listid');
        const newData = {
            _id: whichCard
        }
        $.ajax({ url: `/api/lists/${fromList}`, method: 'DELETE', data: newData })
            .then(function () {
                card.remove()   
            })
    });

    $(document).on('click', '#addCardButton', function () {
        let listid = $(this).attr('listid');
        let newData = {
            card: $('#addCardInput').val().trim(),
            listid: listid
        }
        $.ajax({ url: `/api/lists/${listid}`, method: 'POST', data: newData })
            .then(function () {
                listFunctions.renderList(listid)
            })
    });

})
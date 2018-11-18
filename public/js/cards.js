/**
 * @class Card - Creates Card class in global scope
 * @constructor - takes in card data
 * @param {string} first - takes in listid
 * @param {string} second - takes in cardid
 * @param {string} third - takes in card string
 */
class Card {
    constructor(listid, cardid, card) {
        $(`ul[ listid=${listid} ]`).append(
            $('<li>').attr('draggable', 'true').attr('listid', `${listid}`).attr('cardid', `${cardid}`).addClass('dragCard containers').append(
                $('<div>').addClass('card').append(
                    $('<p>').append(card)
                ),
                $('<div>').addClass('cardEdit butt').append(
                    $('<i>').addClass('fas fa-pen icon')
                ),
                $('<div>').addClass('cardComment butt').attr('id', 'modal').attr('cardid', `${cardid}`).attr('data-name', `${card}`).append(
                    $('<i>').addClass('far fa-comment icon')
                ),
                $('<div>').addClass('cardDelete butt').attr('cardid', `${cardid}`).append(
                    $('<i>').addClass('fas fa-trash-alt icon')
                )
            )
        )
    }
}

const cardFunctions = {

    /**
     * @function cardFunctions.renderCard - renders all cards and finds their correct list
     */
    renderCard: function () {
        $.ajax({ url: '/api/cards', method: 'GET' })
            .then(function (dataList) {
                dataList.forEach(e =>
                    new Card(e.listid, e._id, e.card)
                )
            })
    },

}

/**
* @event listeners - ready all event listeners
*/
$(document).ready(function () {

    $(document).on('click', '#cancelButton', function () {
        let listid = $(this).parent().parent().attr('listid')
        $(this).parent().parent().replaceWith(
            $('<footer>').text('Add a card...').addClass('containers').attr('id', 'clickAddCard').attr('listid', `${listid}`)
        )
    });

    /**
     * @event addCard - on event renders add card fields
     */
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
        $('#addCardInput').focus();
        $('#modal-content').remove();
        $('.infoBox').remove();
        $('.createBoardBox').remove();
        $('.boardSearchBox').remove();
        $('.notificationsBox').remove();
    });

    /**
     * @event Edit - on event removes card text and renders edit fields to card
     */
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

    /**
     * @event PUT - collects card data and updates card in DB
     */
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

    /**
     * @function listFunctions.renderList - on event renders lists
     */
    $(document).on('click', '.cardEditCancel', function () {
        listFunctions.renderList();
    });

    /**
     * @event DELETE - collects card data and deletes it from DB
     */
    $(document).on('click', '.cardDelete', function () {
        let card = $(this).parent()
        const whichCard = $(this).attr('cardid');
        const newData = {
            _id: whichCard
        }
        $.ajax({ url: '/api/cards', method: 'DELETE', data: newData })
            .then(function () {
                card.remove()
            })
    });

    /**
     * @event POST - collects card data and sends it to DB
     */
    $(document).on('click', '#addCardButton', function () {
        let listid = $(this).attr('listid');
        let newData = {
            card: $('#addCardInput').val().trim(),
            listid: listid
        }
        $.ajax({ url: '/api/cards', method: 'POST', data: newData })
            .then(function (e) {
                new Card(e.listid, e._id, e.card)
            })
        $('#addCardInput').val('');
        $('#addCardInput').focus();
    });

    cardFunctions.renderCard();

})
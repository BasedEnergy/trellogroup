const dragNDropFunctions = {
    dragNDrop: function () {
        let cardId;
        let firstBox;
        let moveList;
    },
}

$(document).ready(function () {

    let cardId;
    let firstBox;
    let moveList;

    $(document).on('click', '.add-btn', listFunctions.addList);

    $(document).on('dragstart', `.dragCard`, function () {
        card = $(this).text();
        firstBox = $(this).attr("listid");
        cardid = $(this).attr('cardid');
        $('#modal-content').remove();
    })

    $(document).on('dragend', `.dragCard`, function () {

    })

    $(document).on('dragover', `.containers`, function (ev) {
        ev.preventDefault();
    })

    $(document).on('dragenter', `.containers`, function (ev) {
        ev.preventDefault();
    })


    $(document).on('drop', `.containers`, function () {
        let moveList = $(this).attr("listid");
        let changeCard = {
            card: card,
            listid: moveList,
        }
        console.log(moveList)
        $.ajax({ url: '/api/cards', method: 'PUT', data: changeCard })
        $(`li[ cardid=${cardid} ]`).remove();
        $(`ul[ listid=${moveList} ]`).append(
            $('<li>').attr('draggable', 'true').attr('listid', `${moveList}`).attr('cardid', `${cardid}`).addClass('dragCard containers').append(
                $('<div>').addClass('card').append(
                    $('<p>').append(card)
                ),
                $('<div>').addClass('cardEdit butt').append(
                    $('<i>').addClass('fas fa-pen icon')
                ),
                $('<div>').addClass('cardComment butt').attr('id', 'modal').attr('cardid', `${cardId}`).attr('data-name', `${card}`).append(
                    $('<i>').addClass('far fa-comment icon')
                ),
                $('<div>').addClass('cardDelete butt').attr('cardid', `${cardId}`).append(
                    $('<i>').addClass('fas fa-trash-alt icon')
                )
            )
        )
    })
    dragNDropFunctions.dragNDrop();

})
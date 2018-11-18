const dragNDropFunctions = {

    /**
     * @function dragNDropFunctions.dragNDrop - initiates name space/object
     */
    dragNDrop: function () {
        let cardId;
        let firstBox;
        let moveList;
    },
}

/**
* @event listeners - ready all event listeners
*/
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

    /**
     * @event PUT - changes Card's listid to match new list
     */
    $(document).on('drop', `.containers`, function () {
        let moveList = $(this).attr("listid");
        let changeCard = {
            card: card,
            listid: moveList,
        }
        $.ajax({ url: '/api/cards', method: 'PUT', data: changeCard })
        $(`li[ cardid=${cardid} ]`).remove();
        new Card(moveList, cardid, card)
    })
    /**
     * @function dragNDropFunctions.dragNDrop - initiates objects
     */
    dragNDropFunctions.dragNDrop();

})
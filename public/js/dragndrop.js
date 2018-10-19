const dragNDropFunctions = {
    dragNDrop: function () {
        let cardId;
        let firstBox;
        let moveList;

    },
}

$(document).ready(function () {

    $(document).on('click', '.add-btn', listFunctions.addList);

    $(document).on('dragstart', `.dragCard`, function () {
        card = $(this).attr('id')
        firstBox = $(this).parent().attr("listid")
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
        moveList = $(this).attr("listid");
        let newData = {
            card: card
        }
        $.ajax({ url: `/api/lists/${moveList}`, method: 'POST', data: newData })
        $.ajax({ url: `/api/lists/${firstBox}`, method: 'DELETE', data: newData })
        $('.lists').empty();
        listFunctions.renderList();
    })
    dragNDropFunctions.dragNDrop();

})
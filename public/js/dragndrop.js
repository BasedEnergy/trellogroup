$(document).ready(function () {

    $(document).on('click', '.add-btn', listFunctions.addList);

    $(document).on('dragstart', `.dragCard`, function () {
        cardId = $(this).attr("data-cardName")
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
            card: cardId
        }
        $.ajax({ url: `/api/lists/${moveList}`, method: 'POST', data: newData })
        $.ajax({ url: `/api/lists/${firstBox}`, method: 'DELETE', data: newData })
        $('.lists').empty();
        listFunctions.renderList();
    })

})
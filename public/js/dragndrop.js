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
        card = $(this).attr('id');
        firstBox = $(this).parent().attr("listid");
        cardid = $(this).attr('cardid');
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
            card: card,
            notes: [

            ]
        }
        $.ajax({ url: `/api/lists/${moveList}`, method: 'POST', data: newData })
        // attempt of moving notes data into the "new" card
        // $.ajax({ url: `/api/cards/${cardid}`, method: 'GET' })
        //     .then(function (dataList) {
        //         console.log(dataList)
        //         dataList.notes.forEach(eachNote => {
        //             let newNote = eachNote.note
        //             $.ajax({ url: `/api/cards/${cardid}`, method: 'POST', data: newNote })
        //         })
        //     });
        $.ajax({ url: `/api/lists/${firstBox}`, method: 'DELETE', data: newData })
        $(`#${card}`).remove();
        $(`ul[ listid=${moveList} ]`).append(
            $('<li>').attr('draggable', 'true').attr('listid', `${moveList}`).attr('cardid', `${cardid}`).addClass('dragCard containers').attr('id', `${card}`).append(
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
    })
    dragNDropFunctions.dragNDrop();

})
$(function () {

    const renderList = function () {

        $('.lists').empty();
        $.ajax({ url: "/api/lists", method: "GET" })
            .then(function (dataList) {
                let contentHtml = $('.lists');
                dataList.forEach(e => {
                    contentHtml.append(
                        $(`<div>`)
                            .attr('data-id', `${e._id}`)
                            .addClass(`list`).append(
                                $('<header>')
                                    .text(`${e.list}`).append(
                                        $('<i>')
                                            .addClass('far fa-window-close')
                                            .attr('data-id', `${e._id}`)
                                            .addClass('delete-btn'),
                                    ),
                                $('<ul>')
                                    .attr('id', `${e._id}`)
                                    .addClass('locateCard')
                                    .addClass('containers')
                                    .attr('data-idd', `${e._id}`),
                                // create a footer add a card /button
                                $('<footer>')
                                    .text('Add a card...')
                                    .addClass('clickAddCard')
                                    .attr('data-id', `${e._id}`),

                            )

                    )
                    renderCard(`${e._id}`);

                    //this is the add a card button event
                    $('.clickAddCard').on('click', function () {
                        $(".clickAddCard").off("click")
                        let id = $(this).parent().attr('data-id')
                        $(this).empty('')
                        $(this).append(
                            $('<footer>').append(
                                $('<input>').attr('id', 'addCardInput')).append(
                                    $('<div>').addClass('addCardField').append(
                                        $('<button>').attr('id', 'addCardButton').attr('data-id', id).text('add card'),
                                        $('<i>').addClass('fas fa-times fa-2x').attr('id', 'cancelButton')
                                    )
                                )
                        )
                    })


                    $(`.lists`).append(contentHtml);
                })
                contentHtml.append(
                    $('<div>').addClass('add').append(
                        $('<form>').append(
                            $('<input>')
                                .addClass('list-input')
                                .attr('type', "text")
                                .attr('placeholder', "enter list title"),
                            $('<button>')
                                .addClass('add-btn')
                                .text('Add List')
                        )
                    ),
                )
            })
    }

    const addList = function () {
        let newData = {
            list: $('.list-input').val().trim()
        }
        $.ajax({
            url: '/api/lists',
            method: 'POST',
            data: newData
        })
            .then(function () {
                renderList();
            })
    }

    $(document).on('click', '.delete-btn', function () {
        const deletedID = $(this).data('id');
        const deleteID = {
            _id: deletedID
        }
        $.ajax({
            url: `/api/lists`,
            method: "DELETE",
            data: deleteID
        })
            .then(function () {
                renderList();
            })
    });

    function renderCard(listId) {
        $.ajax({ url: `/api/lists/${listId}`, method: 'GET' })
            .then(function (dataList) {
                let cardList = $(`#${listId}`).addClass('listOfCards')
                cardList.empty();
                dataList[0].cards.forEach(eachCard =>
                    cardList.append(
                        $('<li>').attr('draggable', 'true').attr('data-cardId', `${eachCard._id}`).attr('data-cardName', `${eachCard.card}`).addClass('dragCard').addClass(`${eachCard.card}`).append(
                            $('<div>').addClass('card').append(
                                $('<p>').append(eachCard.card)
                            ),
                            $('<div>').addClass('cardEdit butt').append(
                                $('<i>').addClass('fas fa-pen icon')
                            ),
                            $('<div>').addClass('cardComment butt').attr('id', 'modal').attr('data-id', `${eachCard._id}`).attr('data-name', `${eachCard.card}`).append(
                                $('<i>').addClass('far fa-comment icon')
                            ),
                            $('<div>').addClass('cardDelete butt').attr('data-id', `${eachCard._id}`).append(
                                $('<i>').addClass('fas fa-trash-alt icon')
                            )
                        )
                    )
                )


            })
    }

    $(document).on('click', '.cardEdit', function () {
        $(document).bind('cardEdit', function () {
            $(document).off('click', '.cardEdit');
        });
        const cardData = $(this).parent().children('.card').children('p').val()
        const id = $(this).parent().attr('data-cardId')
        const card = $(this).parent().parent();
        const fromList = $(this).attr('data-id');
        card.replaceWith(
            $('<li>').attr('draggable', 'true').attr('data-cardId', `${id}`).attr('data-cardName', `${cardData}`).addClass('dragCard').addClass(`${cardData}`).append(
                $('<div>').addClass('editInput butt').append(
                    $('<input>').attr('placeholder', "Type in your card..").addClass('cardEditInput'),
                ),
                $('<div>').addClass('cardEditCheck butt').append(
                    $('<i>').addClass('fas fa-check icon editCheck')
                ),
                $('<div>').addClass('cardEditCancel butt').append(
                    $('<i>').addClass('fas fa-times icon editCancel')
                ),
            )
        );

        $(document).on('click', '.cardEditCheck', function () {
            const newCard = $('.cardEditInput').val().trim()
            const newData = {
                _id: fromList,
                card: newCard
            }

            $.ajax({ url: `/api/cards`, method: 'PUT', data: newData })
                .then(function () {

                    renderList();
                })
        });

        $(document).on('click', '.cardEditCancel', function () {
            renderCard();
        });

    })



    $(document).on('click', '.cardDelete', function () {
        const whichCard = $(this).attr('data-id');
        const fromList = $(this).parent().parent().parent().attr('data-id');
        const newData = {
            _id: whichCard
        }
        $.ajax({ url: `/api/lists/${fromList}`, method: 'DELETE', data: newData })
            .then(function () {
                renderList();
            })
    })
    $(document).on('click', '#addCardButton', function () {
        let newData = {
            card: $('#addCardInput').val().trim()
        }
        let whichList = $(this).attr('data-id');
        $.ajax({ url: `/api/lists/${whichList}`, method: 'POST', data: newData })
            .then(function () {
                renderList();
            })
    });


    function dragNDrop() {
        let cardId;
        let firstBox;
        let moveList;

        $(document).on('click', '.add-btn', addList);

        $(document).on('dragstart', `.dragCard`, function () {
            cardId = $(this).attr("data-cardName")
            firstBox = $(this).parent().attr("data-Idd")
        })

    $(document).on('dragend',`.dragCard`,function() { 
        
    })

        $(document).on('dragover', `.containers`, function (ev) {
            ev.preventDefault();
        })

        $(document).on('dragenter', `.containers`, function (ev) {
            ev.preventDefault();
        })


    $(document).on('drop',`.containers`,function() { 
        moveList = $(this).attr("data-idd");
        let newData = {
            card: cardId
        }
        $.ajax({ url: `/api/lists/${moveList}`, method: 'POST', data: newData })
        $.ajax({ url: `/api/lists/${firstBox}`, method: 'DELETE', data: newData })
        $('.lists').empty();
        renderList();
    })
}
    dragNDrop();
    renderList();
});

$(function () {

    const renderList = function () {
        $('.lists').empty();


        $.getJSON("/api/lists")
            .then(function (dataList) {
                let contentHtml = $('.lists');
                dataList.forEach(e => {
                    contentHtml.append(
                        $(`<div>`)
                            .attr('id', `${e._id}`)
                            .addClass(`list`).append(
                                $('<header>')
                                    .text(e.list)
                                    .append(
                                        $('<i>')
                                            .addClass('far fa-window-close')
                                            .attr('data-id', `${e._id}`)
                                            .addClass('delete-btn'),
                                    ),
                                $('<ul>')
                                    .addClass('locateCard'),
                                // create a footer add a card /button
                                $('<footer>').append(
                                    $('<button>')
                                    .text('Add a card...')
                                    .attr('id', 'clickAddCard'),
                                )

                            )
                    )
                })
                contentHtml.append(
                    $('<div>').addClass('add').append(
                        // $('<header>')
                        //     .text('Make a new list!'),
                        $('<form>').append(
                            $('<input>')
                                .addClass('list-input')
                                .attr('type', "text")

                                .attr('placeholder', "Enter list title..."),
                            $('<button>')
                                .attr('id', 'add-btn')
                                .text('Add List')
                        )
                    )
                )
                $(`.lists`).append(contentHtml);
                $('#add-btn').on('click', addList);
                $('.delete-btn').on('click', deleteList);

            })
    }

    const addList = function () {
        let newData = {
            list: $('.list-input').val().trim()
        }
        $.ajax({ url: '/api/lists', method: 'POST', data: newData })
            .then(function () {
                // renderList();
            })
    }

    const deleteList = function () {
        const deleteID = $(event.target).attr('data-id');
        $.ajax({ url: `/api/lists/`, method: "DELETE", data: deleteID })
            .then(function () {
                // $(`#${deleteID}`).remove();
                renderList();
            })

    }
    renderList();
});
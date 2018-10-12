$(function () {

    const renderList = function () {
        // $('.content').empty();


        $.get("/api/lists")
            .then(function (dataList) {
                let contentHtml = $('.lists');
                dataList.forEach(e => {
                    contentHtml.append(
                        $(`<div>`)
<<<<<<< HEAD
                        .attr('id', `${e._id}`)
                        .addClass(`list`).append(
                            $('<header>')
                            .text(e.list).append(
                                $('<i>')
                                .addClass('far fa-window-close')
                                .attr('data-id', `${e._id}`)
                                .addClass('delete-btn'),
                            ),
                            $('<ul>')
                            .addClass('locateCard'),
                            // create a footer add a card /button
                            $('<footer>')
                            .text('Add a card...')
                            .attr('id', 'clickAddList'),

                        )
=======
                            .attr('id', `${e._id}`)
                            .addClass(`list`).append(
                                $('<header>')
                                    .text(e.list).append(
                                        $('<i>')
                                            .addClass('far fa-window-close')
                                            .attr('data-id', `${e._id}`)
                                            .addClass('delete-btn'),
                                    ),
                                $('<ul>')
                                    .addClass('locateCard'),
                                // create a footer add a card /button
                                $('<footer>')
                                    .text('Add a card...')
                                    .attr('id', 'clickAddList'),

                            )
>>>>>>> c3761eebd0d4c2d0da473d5a6b96749acba8699e
                    )
                })
                contentHtml.append(
                    $('<div>').addClass('add').append(
                        $('<header>')
                        .text('Make a new list!'),
                        $('<form>').append(
                            $('<input>')
<<<<<<< HEAD
                            .addClass('list-input')
                            .attr('type', "text")
                            .attr('placeholder', "enter list title"),
=======
                                .addClass('list-input')
                                .attr('type', "text")
                                
                                .attr('placeholder', "enter list title"),
>>>>>>> c3761eebd0d4c2d0da473d5a6b96749acba8699e
                            $('<button>')
                            .attr('id', 'add-btn')
                            .text('Add a List')
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
        $.ajax({
                url: '/api/lists',
                method: 'POST',
                data: newData
            })
            .then(function () {
                // renderList();
            })
    }

    const deleteList = function () {
        const deleteID = $(event.target).attr('data-id');
        $.ajax({
                url: `/api/lists/${deleteID}`,
                method: "DELETE"
            })
            .then(function () {
                $(`#${deleteID}`).remove();
                // renderList();
            })

    }
    renderList();
});
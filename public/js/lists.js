$(function () {

    const renderList = function () {
        // $('.content').empty();


        $.getJSON("/api/lists")
            .then(function (dataList) {
                let contentHtml = $('.lists');
                dataList.forEach(e => {
                    contentHtml.append(
                        $(`<div>`)
                        .attr('id', `${e._id}`)
                            .addClass(`list`).append(
                                $('<header>')
                                    .text(e.list),
                                $('<button>')
                                    .attr('data-id', `${e._id}`)
                                    .addClass('delete-btn')
                                    .text('Delete this List')
                            )
                    )
                })
                contentHtml.append(
                    $('<div>').addClass('add').append(
                        $('<header>')
                            .text('Make a new list!'),
                        $('<form>').append(
                            $('<input>')
                                .addClass('list-input')
                                .attr('type', "text")
                                .attr('placeholder', "enter list title"),
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
        $.ajax({ url: '/api/lists', method: 'POST', data: newData })
            .then(function () {
                // renderList();
            })
    }

    const deleteList = function () {
        const deleteID = $(event.target).attr('data-id');
        $.ajax({ url: `/api/lists/${deleteID}`, method: "DELETE" })
            .then(function () {
                $(`#${deleteID}`).remove();
                // renderList();
            })

    }
    renderList();
});
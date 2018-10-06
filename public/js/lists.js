$(function () {

    const renderList = function () {
        $('.content').empty();


        $.getJSON("/api/lists")
            .then(function (dataList) {
                let contentHtml = $('.lists');
                dataList.forEach(e => {
                    contentHtml.append(
                        $(`<div>`)
                            .addClass(`list`).append(
                                $('<header>')
                                    .text(e.list),
                                $('<button>')
                                    .attr('data-id', `${e._id}`)
                                    .attr('class', 'delete-btn')
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
                $('.delete-btn').on('click', deleteList);
                $('#add-btn').on('click', addList);

            })
    }

    const addList = function () {
        let newData = {
            list: $('.list-input').val().trim()
        }
        $.ajax({ url: '/api/lists', method: 'POST', data: newData })
            .then(function (res) {
                res.json(res);
                renderList();
            })
            .catch(function (err) {
                res.json(err);
            })
    }

    const deleteList = function () {
        const deleteID = $(event.target).attr('data-id');
        $.ajax({ url: `/api/lists/${deleteID}`, method: "DELETE" })
            .then(function () {
                renderList();
            })

    }
    renderList();
});
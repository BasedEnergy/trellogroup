$(function () {

    const renderList = function () {
        $('.lists').empty();




        $.ajax({url:"/api/lists",method:"GET"})
            .then(function (dataList) {
                let contentHtml = $('.lists');
                dataList.forEach(e => {
                    contentHtml.append(
                        $(`<div>`)
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

    $(document).on('click','.delete-btn',function(){
        const deleteID = $(this).data('id');
        console.log(deleteID)
        $.ajax({
                url: `/api/lists`,
                method: "DELETE",
                data: deleteID
        })
            })
            .then(function(){
                $(`#${deleteID}`).remove();
            })
    });

    renderList();
});
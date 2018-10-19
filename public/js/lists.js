const listFunctions = {

    renderList: function () {

        $('.lists').empty();
        $.ajax({ url: "/api/lists", method: "GET" })
            .then(function (dataList) {
                let contentHtml = $('.lists');
                dataList.forEach(e => {
                    contentHtml.append(
                        $(`<div>`).attr('listid', `${e._id}`).addClass(`list`).append(
                            $('<header>').text(`${e.list}`).append(
                                $('<i>').addClass('far fa-window-close delete-btn').attr('listid', `${e._id}`).addClass('delete-btn'),
                            ),
                            $('<ul>').attr('listid', `${e._id}`).addClass('containers'),
                            $('<footer>').text('Add a card...').addClass('containers').attr('id', 'clickAddCard').attr('listid', `${e._id}`),
                        )
                    )
                    cardFunctions.renderCard(`${e._id}`);
                    $(`.lists`).append(contentHtml);
                })
                contentHtml.append(
                    $('<div>').addClass('add').append(
                        $('<form>').append(
                            $('<input>').addClass('list-input').attr('type', "text").attr('placeholder', "enter list title"),
                            $('<button>').addClass('add-btn').text('Add List')
                        )
                    ),
                )
            })
    },

    addList: function () {
        let newData = {
            list: $('.list-input').val().trim()
        }
        $.ajax({ url: '/api/lists', method: 'POST', data: newData })
            .then(function () {
                listFunctions.renderList();
            })
    },
}

$(document).ready(function () {

    listFunctions.renderList();

    $(document).on('click', '.delete-btn', function () {
        const deletedID = $(this).attr('listid');
        const target = $(this)
        const deleteID = {
            _id: deletedID
        }
        console.log(deletedID)
        $.ajax({ url: `/api/lists`, method: "DELETE", data: deleteID })
            .then(function () {
                $(target).parent().parent().remove()
            })
    });

})
const listFunctions = {

    renderList: function () {
        $('.lists').empty();
        $.ajax({ url: '/api/lists', method: 'GET' })
            .then(function (dataList) {
                dataList.forEach(e => {
                    $(`.lists[ boardid=${e.boardid} ]`).append(
                        $(`<div>`).attr('listid', `${e._id}`).addClass(`list`).append(
                            $('<header>').text(`${e.list}`).append(
                                $('<i>').addClass('far fa-window-close delete-btn').attr('listid', `${e._id}`).addClass('delete-btn'),
                            ),
                            $('<ul>').attr('listid', `${e._id}`).addClass('containers'),
                            $('<footer>').text('Add a card...').addClass('containers').attr('id', 'clickAddCard').attr('listid', `${e._id}`),
                        )
                    )
                })
                $('.lists').append(
                    $('<div>').attr('id', 'addListBox').append(
                        $('<div>').addClass('addListIcon').append(
                            $('<i>').addClass('fas fa-plus')
                        ),
                        $('<div>').addClass('addListText').append(
                            $('<p>').text('Add another list')
                        )
                    ),
                )
            })
    },

    addList: function () {
        let boardid = $('.lists').attr('boardid')
        let newData = {
            list: $('#addListInput').val().trim(),
            boardid: boardid
        }
        $.ajax({ url: '/api/lists', method: 'POST', data: newData })
            .then(function (e) {
                listFunctions.renderList();
                cardFunctions.renderCard();
            })
    },
}

$(document).ready(function () {

    $(document).on('click', '#addListBox', function () {
        $('#addListBox').attr('id', 'addingListBox').html(
            $('<input>').attr('id', 'addListInput').attr('placeholder', 'Enter list title...'),
        );
        $('#addingListBox').append(
            $('<div>').addClass('addListBar').append(
                $('<button>').attr('id', 'addListButton').text('Add List'),
                $('<div>').attr('id', 'addListCancel').append(
                    $('<i>').addClass('fas fa-times')
                )
            )
        )
        $('#addListInput').focus();
        $('#modal-content').remove();
        $('.infoBox').remove();
        $('.createBoardBox').remove();
        $('.boardSearchBox').remove();
        $('.notificationsBox').remove();
    });

    $(document).on('keydown', '#addListInput', function(event) {
        if(event.which == 13) 
           listFunctions.addList();
      });

    $(document).on('click', '#addListCancel', function () {
        var removeListBar = function () {
            $('.backUpList').remove();
        };
        $('.addListBar').removeClass('addListBar').addClass('backUpList');
        $('#addingListBox').attr('id', 'addListBox');
        $('#addListInput').remove();
        $('#addListButton').remove();
        $('#addListCancel').remove();
        $('#addListBox').append(
            $('<div>').addClass('addListIcon').append(
                $('<i>').addClass('fas fa-plus')
            ),
            $('<div>').addClass('addListText').append(
                $('<p>').text('Add another list')
            )
        )
        setTimeout(removeListBar, 0.2 * 1000);
    });

    $(document).on('click', '#addListButton', function () {
        listFunctions.addList();
    });

    $(document).on('click', '.delete-btn', function () {
        const deletedID = $(this).attr('listid');
        const target = $(this)
        const deleteID = {
            _id: deletedID
        }
        $.ajax({ url: `/api/lists`, method: "DELETE", data: deleteID })
            .then(function () {
                $(target).parent().parent().remove()
            })
    });

})
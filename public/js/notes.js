const noteFunctions = {

    openModal: function (listLocation, cardid) {
        $('#modal-content').remove();
        let noteBox = $('<div>').attr('id', 'modal-content');
        listLocation.append(
            noteBox.append(
                $('<span>').attr('id', 'closeBtn').addClass('fas fa-times'),
                $('<textarea>').addClass('note-input'),
                $('<div>').attr('id', 'note-placement'),
                $('<div>').attr('id', 'notes-render').attr('cardid', `${cardid}`),
                $('<button>').attr('cardid', `${cardid}`).addClass('button-save').text('Save')
            )
        )
        $('.notes-box').append(noteBox);
        noteFunctions.renderNotes(cardid);
    },

    renderNotes: function (cardid) {
        $.ajax({ url: `/api/cards/${cardid}`, method: 'GET' })
            .then(function (dataList) {
                let noteList = $(`#notes-render[ cardid=${cardid} ]`).addClass('listOfNotes')
                dataList[0].notes.forEach(eachNote => {
                    noteList.append(
                        $('<div>').attr('id', 'note-content').append(
                            $('<p>').text(eachNote.note).attr('id', 'note'),
                            $('<button>').attr('noteid', `${eachNote._id}`).attr('id', 'delete').append(
                                $('<i>').addClass('fas fa-times')
                            )
                        )
                    )
                })
            })
    },

    saveNote: function (cardid) {
        let newNote = $(".note-input").val().trim();
        let newData = {
            note: newNote,
        }
        $.ajax({ url: `/api/cards/${cardid}`, method: 'POST', data: newData });
        $(".note-input").empty();
        $("#notes-render").append(
            $('<div>').attr('id', 'note-content').attr('note', `${newNote}`).append(
                $('<p>').text(newNote).attr('id', 'note'),
                $('<button>').attr('cardid', `${cardid}`).attr('id', 'delete').append(
                    $('<i>').addClass('fas fa-times')
                )
            )
        )
    },
}

$(document).ready(function () {

    $(document).on('click', '#modal', function () {
        let listLocation = $(this).parent().parent().parent();
        let cardid = $(this).parent().attr('cardid')
        noteFunctions.openModal(listLocation, cardid)
    });

    $(document).on('click', '#closeBtn', function () {
        $('#modal-content').remove();
    });

    $(document).on('click', '#delete', function () {
        let cardid = $(this).attr('cardid');
        let noteid = $(this).attr('noteid');
        let note = {
            _id: noteid
        }
        $(this).parent().remove();

        $.ajax({ url: `/api/cards/${cardid}`, method: 'DELETE', data: note })
    });

    $(document).on('click', '.button-save', function () {
        let cardid = $(this).attr('cardid')
        noteFunctions.saveNote(cardid);
    });

})
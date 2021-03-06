const noteFunctions = {

    /**
     * @param {string} first - takes list location
     * @param {string} second - takes card id
     * @function notefunctions.renderNotes - Renders each note to note modal
    */
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
        noteFunctions.renderNotes();
    },

    renderNotes: function () {
        $.ajax({ url: '/api/notes', method: 'GET' })
            .then(function (dataList) {
                dataList.forEach(e => {
                    $(`#notes-render[ cardid=${e.cardid} ]`).addClass('listOfNotes').append(
                        $('<div>').attr('id', 'note-content').append(
                            $('<p>').text(e.note).attr('id', 'note'),
                            $('<button>').attr('noteid', `${e._id}`).attr('id', 'delete').append(
                                $('<i>').addClass('fas fa-times')
                            )
                        )
                    )
                })
            })
    },

    /**
     * @param {string} first - takes card id
     * @event POST - adds note to DB
    */
    saveNote: function (cardid) {
        let newNote = $(".note-input").val().trim(); 
        let newData = {
            note: newNote,
            cardid: cardid
        }
        $.ajax({ url: '/api/notes', method: 'POST', data: newData })
            .then( function (e) {
                $(".note-input").val('');
                $("#notes-render").append(
                    $('<div>').attr('id', 'note-content').attr('note', `${e.note}`).append(
                        $('<p>').text(e.note).attr('id', 'note'),
                        $('<button>').attr('cardid', `${e.cardid}`).attr('id', 'delete').append(
                            $('<i>').addClass('fas fa-times')
                        )
                    )
                )
            })
    },
}

/**
* @event listeners - ready all event listeners
*/
$(document).ready(function () {

    /**
     * @function noteFunctions.openModal - sends arguments to openModal
     * @argument listLocation - list location
     * @argument cardid - card id
    */

    $(document).on('click', '#modal', function () {
        let listLocation = $(this).parent().parent().parent();
        let cardid = $(this).parent().attr('cardid')
        noteFunctions.openModal(listLocation, cardid)
    });

    $(document).on('click', '#closeBtn', function () {
        $('#modal-content').remove();
    });

    /**
     * @event DELETE - removes note from DB
     */
    $(document).on('click', '#delete', function () {
        let cardid = $(this).attr('cardid');
        let noteid = $(this).attr('noteid');
        let note = {
            _id: noteid
        }
        $(this).parent().remove();
        $.ajax({ url: '/api/notes', method: 'DELETE', data: note })
    });

    /**
     * @function noteFunctions.saveNote - sends cardid to saveNote function
     * @argument cardid - card id
     */
    $(document).on('click', '.button-save', function () {
        let cardid = $(this).attr('cardid')
        noteFunctions.saveNote(cardid);
    });

})
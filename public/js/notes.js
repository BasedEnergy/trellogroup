let modal = document.getElementById('modal');

let modalContent = document.querySelector('.modal-content')

let saveButton = document.getElementsByClassName('button-save')[0];

let close = document.getElementsByClassName('closeBtn')[0];

modal.addEventListener('click', openModal);

close.addEventListener('click', closeModal);

function openModal() {
    modalContent.style.display = 'inline-block';

}

function closeModal() {
    modalContent.style.display = 'none';
}

const saveNote = function () {
    console.log('working');
    let noteInput = $(".note-input").val().trim();
    $(".note-input").empty();
    $("#notes-render").append("<div id='note-content'>" + noteInput + `<button id = 'delete'><i class="fas fa-times"></i></button>  </div>`);

    $.ajax({
        url: '/api/notes',
        method: 'POST',
        data: {
            note: noteInput
        }
    });
}

const renderNotes = function () {
    $.ajax({
        url: '/api/notes',
        method: 'GET',
    }).done(function (data) {
        console.log(data[0].note);
        for (var i in data) {
            console.log(data[i].note);
            $("#notes-render").append("<div id='note-content'>" + data[i].note + `<button id = 'delete'><i class="fas fa-times"></i> </button>  </div>`);
        }
    })
};

$(document).on('click', '#delete', function () {
    let thisID = $(this).attr('noteID');
    $(this).parent().remove();

    $.ajax({
        url: '/api/notes',
        type: 'DELETE',
        data: thisID


    }).then(function () {
        console.log('delete')
    })

});

$(document).ready(function () {
    renderNotes();
})

saveButton.addEventListener('click', saveNote);
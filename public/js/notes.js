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

// const saveNotes = function () {
//     $("#button-save").on("click", saveNote);
// };

const saveNote = function (e) {
    e.preventDefault();
    console.log('working');
    const noteInput = $(".note-input").val().trim();
    $(".note-input").empty();
    $("#notes-render").text(noteInput);
    $.ajax({})
};

saveButton.addEventListener('click', saveNote);
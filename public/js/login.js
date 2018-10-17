$('form').on('submit', function (event) {
    event.preventDefault();
    const user = $('.username-input').val().trim();
    const pass = $('.password-input').val().trim();
    $.post('/api/login', { username: user, password: pass })
        .then(function (data) {
            localStorage.setItem('user_id', data[0]._id);
            window.location.href = "*";
        })
})
$('.create').on('click', function () {
    window.location.href = "/createacc";
})
$('form').on('submit', function (event) {
    event.preventDefault();
    const user = $('.username-input').val().trim();
    const pass = $('.password-input').val().trim();
    $.post('/api/login', { username: user, password: pass })
        .then(function (data) {
            if (data === null) {
                alert('Invalid Login');
            } else {
                localStorage.clear();
                localStorage.setItem('user_id', data._id);
                window.location.href = '/';
            }
        })
})

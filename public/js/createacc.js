$('form').on('submit', function (event) {
    event.preventDefault();
    const user = $('.username-input').val().trim();
    const pass = $('.password-input').val().trim();
    $.ajax({
        url: '/api/users',
        method: 'POST',
        data: {
            username: user,
            password: pass
        }
    })
        .then(function (data) {
            console.log(data);
            if (data.errmsg) {
                alert(data.errmsg);
            } else {
                window.location.href = "/login";
            }
        })
})

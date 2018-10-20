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
            if(data.name === "ValidationError"){
                alert(data.message);
            } else {
                window.location.href = "/login";
            }
        })
})
  
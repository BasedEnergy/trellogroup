$('form').on('submit', function(event){
    event.preventDefault();
    const username = $('.username-input').val().trim();
    const password = $('.password-input').val().trim();
    console.log(username);
    console.log(password);
    $.ajax({
    url: '/api/users',
    method: 'POST',
    data: {
        username: username,
        password: password
      }
    })
    .then(function(){
        window.location.href = "./login.html";
    })
})
        
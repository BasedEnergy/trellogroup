const listFunctions = {
    get: function () {
    $.ajax({ url: '/api/get', method: 'GET' })
        .then(function(event){

        })
    }, 

    post: function () {
    $.ajax({ url: '/api/post', method: 'POST'})
        .then(function(event){

        })
    },

    put: function () {
    $.ajax({ url: '/api/put', method: 'PUT'})
        .then(function(){
            
        })
    },
}
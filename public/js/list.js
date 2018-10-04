const listFunctions = {
    get: function () {
    $.ajax({ url: '/api/get', method: 'GET' })
        .then(/* get functions */)
    }, /* <-- notice the comma */

    post: function () {
    $.ajax({ url: '/api/post', method: 'POST'})
        .then(/* post functions */)
    },

    put: function () {
    $.ajax({ url: '/api/put', method: 'PUT'})
        .then(/* put functions */)
    },
}
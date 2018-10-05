$(function(){

const renderList = function (event) {
    event.preventDefault();
    $.ajax({ url: "/api/lists", method: "GET" })
        .then(function (dataList) {
            let contentHtml = $('<ul>').addClass('contentbox');
            console.log(contentHtml);
            dataList.forEach(e => {
                contentHtml.append(
                    $('<div>').append(
                        $(`<ul>`)
                            .addClass('contentList')
                            .text(`${e.list}`),
                        //div where the card should be placed
                        $(`<button>`)
                            .addClass('addButton')
                            .text('click to add cards')
                    )
                )
            })
            $(`.content`).html(contentHtml);
        })
}

    // const addList = function (event) {
    //     event.preventDefault();
    //     const listInput = {
    //         list: $('.list-input').val().trim()
    //     }
    //     console.log(listInput);
    //     $.ajax({ url: 'app/lists', method: 'POST', data: listInput})
    //         .then(function(dataList){
    //             if(dataList._id){
    //                 renderList();
    //             }
    //         })
    // }

renderList();

});
$('.submit-list').on('click', addList);
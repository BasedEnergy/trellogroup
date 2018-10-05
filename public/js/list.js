
$(function(){

    const renderList = function () {
    $('.content').empty();


    $.ajax({ url: "/api/lists", method: "GET" })
        .then(function (dataList) {
            let contentHtml = $('<ul>').addClass('contentbox');
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
renderList();
});
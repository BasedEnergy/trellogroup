$(function () {

    const renderList = function () {

        $('.lists').empty();
        $.ajax({ url: "/api/lists", method: "GET" })
            .then(function (dataList) {
                let contentHtml = $('.lists');
                dataList.forEach(e => {
                    contentHtml.append(
                        $(`<div>`)
                            .attr('id', `${e._id}`)
                            .addClass(`list`).append(
                                $('<header>')
                                    .text(e.list).append(
                                        $('<i>')
                                            .addClass('far fa-window-close')
                                            .attr('data-id', `${e._id}`)
                                            .addClass('delete-btn'),
                                ),
                                $('<ul>')
                                    .addClass(`${e.list}`)
                                    .addClass('locateCard')
                                    .addClass('containers')
                                    .attr('data-idd', `${e._id}`),
                                // create a footer add a card /button
                                $('<footer>')
                                    .text('Add a card...')
                                    .addClass('clickAddList'),

                        )
                    )
                    renderCard(`${e._id}`,`${e.list}`);
                    
                    $('.clickAddList').on('click', function (e) {
                        $(".clickAddList").off("click")
                        $(this)
                            .text('')
                            .append(
                                $('<input>')
                                    .addClass('addCard')
                                    .attr('placeholder','name of the card')
                                    .attr('type',"text"),
                                $('<button>')
                                    .addClass('addCardButton')
                                    .text('Click to add card')
                            )
                        })
                        $(document).on('click','.addCardButton',addCardList(`${e._id}`));
                    
                    
                    contentHtml.append(
                        $('<div>').addClass('add').append(
                            $('<form>').append(
                                $('<input>')
                                    .addClass('list-input')
                                    .attr('type', "text")
                                    .attr('placeholder', "enter list title"),
                                $('<button>')
                                    .attr('id', 'add-btn')
                                    .text('Add List')
                            )
                        ),
                    )
                    $(`.lists`).append(contentHtml);
                    $('#add-btn').on('click', addList);
                })
            })
        }

        const addList = function () {
            let newData = {
                list: $('.list-input').val().trim()
            }
            $.ajax({
                url: '/api/lists',
                method: 'POST',
                data: newData
            })
                .then(function () {
                    // renderList();
                })
        }

        $(document).on('click', '.delete-btn', function () {
            const deleteID = $(this).data('id');
            console.log(deleteID)
            $.ajax({
                url: `/api/lists`,
                method: "DELETE",
                data: deleteID
            })
            .then(function () {
                renderList();
            })
        });
        
        function renderCard(listId,className){
            $.ajax({ url: `/api/lists/${listId}`, method: 'GET' })
                .then(function (dataList) {
                    let cardList = $(`.${className}`).addClass('listOfCards')
                    cardList.empty();
                    dataList[0].cards.forEach(eachCard =>
                        cardList.append(
                            $('<li>')
                                .text(eachCard.card)
                                .attr('draggable', 'true')
                                .attr('data-cardId', `${eachCard._id}`)
                                .attr('data-cardName', `${eachCard.card}`)
                                .addClass('dragCard')
                        )
                    )
                })
                .done(function(){
                    drag();
                })
            }

            function addCardList(listId){
                
            let newData = {
                card: $('.addCard').val()
            }
            
            $.ajax({ url: `/api/lists/${listId}`, method: 'POST',data:newData })
            renderList();
            }


        function drag() {
            const fills = document.querySelectorAll('.dragCard');
            const containers = document.querySelectorAll('.containers');
            let cardId;
            let firstBox;
            let moveList;
            for (const fill of fills) {
                fill.addEventListener('dragstart', dragStart);
                fill.addEventListener('dragend', dragEnd);
            }
            for (const container of containers) {
                container.addEventListener('dragover', dragOver);
                container.addEventListener('dragenter', dragEnter);
                container.addEventListener('dragleave', dragLeave);
                container.addEventListener('drop', dragDrop);
            }
            function dragStart() {
                cardId = $(this).attr("data-cardName");
                firstBox = $(this).parent().attr("data-Idd");
            }
            function dragEnd() {
                let newData = {
                    card: cardId
                }
                $.ajax({ url: `/api/lists/${moveList}`, method: 'POST', data: newData })
                $.ajax({ url: `/api/lists/${firstBox}`, method: 'DELETE', data: newData })
                renderList();
            }
            function dragOver(ev) {
                ev.preventDefault();
            }
            function dragEnter(ev) {
                ev.preventDefault();
            }
            function dragLeave() {
            }
            function dragDrop() {
                moveList = $(this).attr("data-idd");
            }   
        }

    renderList();
});

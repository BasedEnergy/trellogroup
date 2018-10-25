const boardFunctions = {

    renderCreateBoard: function () {
        $('body').addClass('lowerOpacity')
        $('html').append(
            $('<div>').addClass('createBoardCenter').append(
                $('<div>').addClass('creatingBoardBox').append(
                    $('<div>').addClass('boardBG').append(
                        $('<div>').addClass('boardRow').append(
                            $('<input>').addClass('createBoardInput').attr('placeholder', 'Add Board Title'),
                            $('<div>').addClass('cancelCreateBoard').append(
                                $('<i>').addClass('fas fa-times')
                            )
                        )
                    ),
                    $('<div>').addClass('colorBox').append(
                        $('<div>').addClass('boardRow').append(
                            $('<div>').css('background-color', 'rgb(0, 121, 191)').addClass('boardColorSel').attr('id', 'boardBlue'),
                            $('<div>').css('background-color', 'rgb(210, 144, 52)').addClass('boardColorSel').attr('id', 'boardOrange'),
                            $('<div>').css('background-color', 'rgb(81, 152, 57)').addClass('boardColorSel').attr('id', 'boardGreen'),
                        ),
                        $('<div>').addClass('boardRow').append(
                            $('<div>').css('background-color', 'rgb(176, 70, 50)').addClass('boardColorSel').attr('id', 'boardRed'),
                            $('<div>').css('background-color', 'rgb(137, 96, 158)').addClass('boardColorSel').attr('id', 'boardPurple'),
                            $('<div>').css('background-color', 'rgb(205, 90, 145)').addClass('boardColorSel').attr('id', 'boardPink'),
                        ),
                        $('<div>').addClass('boardRow').append(
                            $('<div>').css('background-color', 'rgb(75, 191, 107)').addClass('boardColorSel').attr('id', 'boardLime'),
                            $('<div>').css('background-color', 'rgb(0, 174, 204)').addClass('boardColorSel').attr('id', 'boardCyan'),
                            $('<div>').css('background-color', 'rgb(131, 140, 145)').addClass('boardColorSel').attr('id', 'boardGrey'),
                        ),
                    ),
                    $('<div>').attr('id', 'createBoard').append(
                        $('<p>').text('Create Board')
                    )
                )
            )
        )
    },

    renderBoard: function () {
        $('.homeCenter').empty();
        $.ajax({ url: '/api/boards', method: 'GET' })
            .then(function (e) {
                $('.homeCenter').append(
                    $('<div>').addClass('boardsTitleBox').append(
                        $('<i>').addClass('fas fa-user'),
                        $('<p>').text('Personal Boards').css('margin-left', '8px')
                    )
                )
                e.forEach(e => {
                    $('.homeCenter').append(
                        $('<div>').css('background-color', e.color).attr('boardid', e._id).addClass('boardSelect').append(
                            $('<p>').text(e.board)
                        )
                    )
                })
                $('.homeCenter').append(
                    $('<div>').addClass('homeCreateBoard').attr('id', 'boardCreate').append(
                        $('<p>').text('Add new board...')
                    )
                )
            })
    },

    addBoard: function () {
        let board = $('.createBoardInput').val().trim();
        let color = $('.boardBG').css('background-color');
        console.log(color)
        let newBoard = {
            board: board,
            star: false,
            color: color
        }
        $.ajax({ url: '/api/boards', method: 'POST', data: newBoard })
            .then(function () {
                boardFunctions.renderBoard();
            })
    },

    deleteBoard: function () {
        $.ajax({ url: '/api/boards', method: 'DELETE' })
            .then(function () {
                menuFunctions.renderHomePage();
            })
    },

    editBoard: function () {

    },

}

$(document).ready(function () {

    $(document).on('click', '.boardSelect', function () {
        let list = $('.lists').val();
        $('.lists').remove();
        let boardid = $(this).attr('boardid');
        let color = $(this).css('background-color');
        $('body').css('background-color', color);
        let board = $(this).text();
        $('.board-header').html(board);
        if (list === undefined) {
            $('.ui').append(
                $('<div>').addClass('lists').attr('boardid', boardid)
            );
        } else {
            $('.lists').attr('boardid', boardid)
        }
        listFunctions.renderList();
        cardFunctions.renderCard();
        $('.homePage').remove();
    })

    $(document).on('click', '#boardCreate', function () {
        boardFunctions.renderCreateBoard();
        $('.createBoardBox').remove();
    });

    $(document).on('click', '.cancelCreateBoard', function () {
        $('.createBoardCenter').remove();
        $('body').removeClass('lowerOpacity')
    });

    $(document).on('click', '#createBoard', function () {
        boardFunctions.addBoard();
        $('.createBoardCenter').remove();
        $('body').removeClass('lowerOpacity')
    });

    $(document).on('click', '#boardRed', function () {
        $('.boardBG').css('background-color', 'rgb(176, 70, 50)');
    });

    $(document).on('click', '#boardBlue', function () {
        $('.boardBG').css('background-color', 'rgb(0, 121, 191)');
    });

    $(document).on('click', '#boardOrange', function () {
        $('.boardBG').css('background-color', 'rgb(210, 144, 52)');
    });

    $(document).on('click', '#boardGreen', function () {
        $('.boardBG').css('background-color', 'rgb(81, 152, 57)');
    });

    $(document).on('click', '#boardPurple', function () {
        $('.boardBG').css('background-color', 'rgb(137, 96, 158)');
    });

    $(document).on('click', '#boardPink', function () {
        $('.boardBG').css('background-color', 'rgb(205, 90, 145)');
    });

    $(document).on('click', '#boardLime', function () {
        $('.boardBG').css('background-color', 'rgb(75, 191, 107)');
    });

    $(document).on('click', '#boardCyan', function () {
        $('.boardBG').css('background-color', 'rgb(0, 174, 204)');
    });

    $(document).on('click', '#boardGrey', function () {
        $('.boardBG').css('background-color', 'rgb(131, 140, 145)')
    });

})

/*  Function that allows text items to be edited when double clicked  */

$.fn.extend({
    editable: function () {
        var that = this,
            $edittextbox = $('<input type="text"></input>').css('min-width', that.width()),
            submitChanges = function () {
                that.html($edittextbox.val());
                that.show();
                that.trigger('editsubmit', [that.html()]);
                $(document).unbind('click', submitChanges);
                $edittextbox.detach();
            },
            tempVal;
        $edittextbox.click(function (event) {
            event.stopPropagation();
        });

        that.dblclick(function (e) {
            tempVal = that.html();
            $edittextbox.val(tempVal).insertBefore(that).bind('keypress', function (e) {
                if ($(this).val() !== '') {
                    var code = (e.keyCode ? e.keyCode : e.which);
                    if (code == 13) {
                        submitChanges();
                    }
                }
            });
            that.hide();
            $(document).click(submitChanges);
        });
        return that;
    }
});

/*  This is where you activate the function for specific classes  */

$('.board-header').editable().on('editsubmit', function (event, val) {
    console.log('text changed to ' + val);
});
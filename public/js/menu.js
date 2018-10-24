const menuFunctions = {

    renderHomePage: function () {
        $('.ui').append(
            $('<div>').addClass('homePage').append(
                $('<div>').addClass('homeLeft').append(

                ),
                $('<div>').addClass('homeCenter').append(

                ),
                $('<div>').addClass('homeRight').append(

                )
            )
        )
    },

    renderBoardSearch () {
        $('.navbar.board').append(
            $('<div>')
        )
    },

    renderInfo: function () {
        $('.createBoardBox').remove();
        $('.infoBox').remove();
        $('.navbar.board').append(
            $('<div>').addClass('infoBox').append(
                $('<div>').addClass('infoTitleBox').append(
                    $('<div>').addClass('infoTitle').append(
                        $('<p>').text('Information'),
                    ),
                    $('<div>').attr('id', 'closeInfoIcon').append(
                        $('<i>').addClass('fas fa-times')
                    ),
                ),
                $('<div>').addClass('infoContent').append(
                    $('<div>').addClass('replaceTip').append(
                        $('<div>').addClass('infoTip').append(
                            $('<img>').attr('src', 'https://a.trellocdn.com/prgb/dist/images/tips/guide-1@1x.3a63a6244ef2e7ade4d6.png'),
                            $('<p>').text('New to Trello? Check Out This Guide')
                        )
                    ),
                    $('<div>').addClass('newTip').append(

                    ),
                    $('<hr>'),
                    $('<div>').addClass('infoLinks').append(

                    )
                )
            )
        );
    },

    createBoardBox: function () {
        $('.infoBox').remove();
        $('.createBoardBox').remove();
        $('.navbar.board').append(
            $('<div>').addClass('createBoardBox').append(
                $('<div>').addClass('createBoardTitle').append(
                    $('<div>').append(
                        $('<p>').text('Create'),
                    ),
                    $('<div>').attr('id', 'closeBoard').append(
                        $('<i>').addClass('fas fa-times'),
                    ),
                ),
                $('<div>').attr('id', 'boardCreate').addClass('createBoardLink').append(
                    $('<p>').addClass('boardCreateCreateBoard').text('Create Board...'),
                    $('<p>').css('font-size', '12px').text('A board is made up of cards ordered on lists. Use it to manage projects, track information, or organize anything.')
                ),
                $('<div>').attr('id', 'teamCreate').addClass('createBoardLink').append(
                    $('<p>').addClass('boardCreateCreateBoard').text('Create Team...'),
                    $('<p>').css('font-size', '12px').text('A team is a group of boards and people. Use it to organize your company, side hustle, family, or friends.')
                ),
            )
        );
    },

    renderNavButtons: function () {
        $('.navbar.app').append(
            $('<div>').addClass('navFull').append(
                $('<div>').attr('id', 'goHome').addClass('navbarLeft').append(
                    $('<i>').addClass('fas fa-home')
                ),
                $('<div>').attr('id', 'Boards').addClass('navbarBoards').append(
                    $('<i>').addClass('fab fa-windows'),
                    $('<p>').text('Boards')
                ),
                $('<div>').addClass('navbarSearch').append(
                    $('<input>').attr('id', 'boardSearch'),
                    $('<i>').addClass('fas fa-search')
                ),
                $('<div>').addClass('navbarLogo').append(
                    $('<img>').attr('id', 'logo').attr('src', '../assets/trello-logo-white.png')
                ),
                $('<div>').addClass('rightIcons').append(
                    $('<div>').attr('id', 'createBoard').addClass('navbarRight').append(
                        $('<i>').addClass('fas fa-plus')
                    ),
                    $('<div>').attr('id', 'info').addClass('navbarRight').append(
                        $('<i>').addClass('fas fa-info-circle')
                    ),
                    $('<div>').attr('id', 'notifications').addClass('navbarRight').append(
                        $('<i>').addClass('far fa-bell')
                    ),
                    $('<div>').attr('id', 'navUserIcon').addClass('userIcon')
                )
            )
        ),
            $('.navbar.board').append(
                $('<div>').attr('id', 'openMenu').addClass('openMenuButton').append(
                    $('<div>').append(
                        $('<i>').addClass('fas fa-ellipsis-h')
                    ),
                    $('<div>').append(
                        $('<p>').text('Show Menu').css('font-size', '14px').css('margin-left', '8px')
                    ),
                ),
            )
    },

    renderMenu: function () {
        $('.menu').html('');
        let currentBG = $('body').css('background-color');
        $('.lists').addClass('listsShorten');
        $('.ui').append(
            $('<section>').addClass('menu').append(
                $('<div>').addClass('menuTitle').append(
                    $('<div>').append(
                        $('<p>').text('Menu')
                    ),
                    $('<div>').attr('id', 'closeMenu').append(
                        $('<i>').addClass('fas fa-times')
                    )
                ),
                $('<hr>'),
                $('<div>').addClass('changeBackground menuButton').attr('id', 'backgroundButton').append(
                    $('<div>').addClass('menuIcon').css('background', currentBG),
                    $('<div>').addClass('changeBackground').text('Change Background')
                ),
                $('<div>').addClass('filterCards').append(

                ),
                $('<div>').addClass('powerUps').append(

                ),
                $('<div>').addClass('moreMenu').append(

                ),
            )
        )
    },

    renderMenuBackgrounds: function () {
        $('.menu').html('');
        $('.menu').append(
            $('<div>').addClass('menuTitle').append(
                $('<div>').attr('id', 'menuBack').addClass('menuBack').append(
                    $('<i>').addClass('fas fa-arrow-left')
                ),
                $('<div>').append(
                    $('<p>').text('Change Background')
                ),
                $('<div>').attr('id', 'closeMenu').append(
                    $('<i>').addClass('fas fa-times')
                )
            ),
            $('<hr>'),
            $('<div>').addClass('menuContent').append(
                $('<div>').addClass('rowBG').append(
                    $('<div>').addClass('menuBGBox').append(
                        $('<div>').attr('id', 'colorSelector').addClass('BGButton'),
                        $('<p>').text('Colors').css('text-align', 'center')
                    ),
                    $('<div>').addClass('menuBGBox').append(
                        $('<div>').attr('id', 'imageSelector').addClass('BGButton'),
                        $('<p>').text('Photos').css('text-align', 'center')
                    ),
                ),
                $('<hr>').addClass('contentHR'),
                $('<div>').addClass('rowBG').append(
                    $('<div>').addClass('menuBGBox').append(
                        $('<div>').attr('id', 'customSelector').addClass('BGButton'),
                        $('<p>').text('Custom').css('text-align', 'center')
                    )
                ),
            )
        )
    },

    renderColorSelectors: function () {
        $('.menu').html('')
        $('.menu').append(
            $('<div>').addClass('menuTitle').append(
                $('<div>').attr('id', 'backgroundButton').addClass('menuBack').append(
                    $('<i>').addClass('fas fa-arrow-left')
                ),
                $('<div>').append(
                    $('<p>').text('Colors')
                ),
                $('<div>').attr('id', 'closeMenu').append(
                    $('<i>').addClass('fas fa-times')
                )
            ),
            $('<hr>'),
            $('<div>').addClass('menuContent').append(
                $('<div>').addClass('row').append(
                    $('<div>').css('background-color', 'rgb(0, 121, 191)').addClass('colorSel').attr('id', 'colorMeBlue'),
                    $('<div>').css('background-color', 'rgb(210, 144, 52)').addClass('colorSel colorSelRight').attr('id', 'colorMeOrange'),
                ),
                $('<div>').addClass('row').append(
                    $('<div>').css('background-color', 'rgb(81, 152, 57)').addClass('colorSel').attr('id', 'colorMeGreen'),
                    $('<div>').css('background-color', 'rgb(176, 70, 50)').addClass('colorSel colorSelRight').attr('id', 'colorMeRed')
                ),
                $('<div>').addClass('row').append(
                    $('<div>').css('background-color', 'rgb(137, 96, 158)').addClass('colorSel').attr('id', 'colorMePurple'),
                    $('<div>').css('background-color', 'rgb(205, 90, 145)').addClass('colorSel colorSelRight').attr('id', 'colorMePink')
                ),
                $('<div>').addClass('row').append(
                    $('<div>').css('background-color', 'rgb(75, 191, 107)').addClass('colorSel').attr('id', 'colorMeLime'),
                    $('<div>').css('background-color', 'rgb(0, 174, 204)').addClass('colorSel colorSelRight').attr('id', 'colorMeCyan')
                ),
                $('<div>').addClass('row').append(
                    $('<div>').css('background-color', 'rgb(131, 140, 145)').addClass('colorSel').attr('id', 'colorMeGrey'),
                    $('<div>').css('background-color', '#999999').addClass('colorSel colorSelRight rainbow').attr('id', 'colorMeAll')
                ),
            )
        )
    },

    closeMenu: function () {
        $('.menu').removeClass('closeMenuAnimation')
        $('.menu').remove()
        $('.lists').removeClass('listsReturn')
    },

}

$(document).ready(function () {

/*
============='.lists' Drag and Scroll=============
*/

    var curDown = false,
        curYPos = 0,
        curXPos = 0;
    $('.lists').mousemove(function (m) {
        if (curDown === true) {
            console.log(m)
            console.log(curDown)
            $(window).scrollTop($(window).scrollTop() + (curYPos - m.pageY));
            $('.lists').scrollLeft($('.lists').scrollLeft() + (curXPos - m.pageX));
        }
    });

    $('.lists').mousedown(function (m) {
        curDown = true;
        curYPos = m.pageY;
        curXPos = m.pageX;
    });

    $('.lists').mouseup(function () {
        curDown = false;
    });

/*
============='.lists' Drag and Scroll=============
*/

/*
=============Nav and Menu  Event Listners=============
*/

    $(document).on('click', '.lists', function () {
        $('.infoBox').remove();
        $('.createBoardBox').remove();
    });

    $(document).on('click', '.homePage', function () {
        $('.infoBox').remove();
        $('.createBoardBox').remove();
    });

    $(document).on('click', '#goHome', function () {
        let ifHome = $('.homePage').val();
        if (ifHome === undefined) {
            menuFunctions.renderHomePage();
        } else {
            $('.homePage').remove();
        }
    });

    $(document).on('click', '#closeInfoIcon', function () {
        $('.infoBox').remove();
    });

    $(document).on('click', '#closeBoard', function () {
        $('.createBoardBox').remove();
    });

    $(document).on('click', '#info', function () {
        let ifInfo = $('.infoBox').val();
        if (ifInfo === undefined) {
            menuFunctions.renderInfo();
        } else {
            $('.infoBox').remove();
        }
    });

    $(document).on('click', '#createBoard', function () {
        let ifBoard = $('.createBoardBox').val();
        if (ifBoard === undefined) {
            menuFunctions.createBoardBox();
        } else {
            $('.createBoardBox').remove();
        }
    });

    $(document).on('click', '#menuBack', function () {
        menuFunctions.renderMenu()
    });

    $(document).on('click', '#colorSelector', function () {
        menuFunctions.renderColorSelectors();
    });

    $(document).on('click', '#closeMenu', function () {
        $('.menu').addClass('closeMenuAnimation');
        setTimeout(menuFunctions.closeMenu, 0.2 * 1000)
        $('.lists').removeClass('listsShorten')
        $('.lists').addClass('listsReturn')
    });

    $(document).on('click', '#openMenu', function () {
        menuFunctions.renderMenu()
    });

    $(document).on('click', '#backgroundButton', function () {
        menuFunctions.renderMenuBackgrounds()
        $('#menuAnimations').addClass('deeperMenu')
    });

/*
=============Nav and Menu  Event Listners=============
*/

/*
============Color Selector Event Listeners============
*/

    $(document).on('click', '#colorMeRed', function () {
        $('body').css('background-color', 'rgb(176, 70, 50)');
        $('body').removeClass('rainbow');
    });

    $(document).on('click', '#colorMeBlue', function () {
        $('body').css('background-color', 'rgb(0, 121, 191)');
        $('body').removeClass('rainbow');
    });

    $(document).on('click', '#colorMeOrange', function () {
        $('body').css('background-color', 'rgb(210, 144, 52)');
        $('body').removeClass('rainbow');
    });

    $(document).on('click', '#colorMeGreen', function () {
        $('body').css('background-color', 'rgb(81, 152, 57)');
        $('body').removeClass('rainbow');
    });


    $(document).on('click', '#colorMePurple', function () {
        $('body').css('background-color', 'rgb(137, 96, 158)');
        $('body').removeClass('rainbow')
    });

    $(document).on('click', '#colorMePink', function () {
        $('body').css('background-color', 'rgb(205, 90, 145)');
        $('body').removeClass('rainbow')
    });

    $(document).on('click', '#colorMeLime', function () {
        $('body').css('background-color', 'rgb(75, 191, 107)');
        $('body').removeClass('rainbow')
    });

    $(document).on('click', '#colorMeCyan', function () {
        $('body').css('background-color', 'rgb(0, 174, 204)');
        $('body').removeClass('rainbow')
    });

    $(document).on('click', '#colorMeGrey', function () {
        $('body').css('background-color', 'rgb(131, 140, 145)')
    });

    $(document).on('click', '#colorMeAll', function () {
        $('body').addClass('rainbow');
    });

/*
============Color Selector Event Listeners============
*/

    menuFunctions.renderNavButtons()
})


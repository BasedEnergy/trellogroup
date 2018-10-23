const menuFunctions = {

    renderNavButtons: function () {
        $('.navbar.app').append(
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
            $('<div>').attr('id', 'createBoard').addClass('navbarRight').append(
                $('<i>').addClass('fas fa-plus')
            ),
            $('<div>').attr('id', 'info').addClass('navbarRight').append(
                $('<i>').addClass('fas fa-info-circle')
            ),
            $('<div>').attr('id', 'notifications').addClass('navbarRight').append(
                $('<i>').addClass('far fa-bell')
            ),
        ),
            $('.navbar.board').append(
                $('<div>').attr('id', 'openMenu').addClass('openMenuButton').append(
                    $('<div>').append(
                        $('<i>').addClass('fas fa-ellipsis-h')
                    ),
                    $('<div>').attr('id', 'openMenu').append(
                        $('<p>').text('Show Menu').css('font-size', '14px').css('margin-left', '8px')
                    ),
                ),
            )
    },

    renderMenu: function () {
        let currentBG = $('body').css('background-color')
        $('.lists').addClass('listsShorten')
        $('.lists').append(
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

    menuBack: function () {
        let currentBG = $('body').css('background-color')
        $('.menu').html('')
        $('.menu').append(
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
    },

    renderMenuBackgrounds: function () {
        $('.menu').html('')
        $('.menu').append(
            $('<div>').addClass('menuTitle').append(
                $('<div>').attr('id', 'menuBack').addClass('menuBack').append(
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
                $('<div>').addClass('menuBGBox').append(
                    $('<div>').attr('id', 'colorSelector').addClass('BGButton'),
                    $('<p>').text('Colors').css('text-align', 'center')
                ),
                $('<div>').addClass('menuBGBox').append(
                    $('<div>').attr('id', 'imageSelector').addClass('BGButton'),
                    $('<p>').text('Photos').css('text-align', 'center')
                )
            ),
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
                $('<div>').css('background-color', '#cc0000').addClass('colorSel').attr('id', 'colorMeRed'),
                $('<div>').css('background-color', 'rgb(0, 121, 191)').addClass('colorSel colorSelRight').attr('id', 'colorMeBlue'),
            ),
            $('<div>').addClass('menuContent').append(
                $('<div>').css('background-color', '#408000').addClass('colorSel').attr('id', 'colorMeGreen'),
                $('<div>').css('background-color', '#999999').addClass('colorSel colorSelRight rainbow').attr('id', 'colorMeAll')
            ),
        )
    },

    closeMenu: function () {
        $('.menu').removeClass('closeMenuAnimation')
        $('.menu').remove()
        $('.lists').removeClass('listsReturn')
    },

}

$(document).ready(function () {

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

    $(document).on('click', '#menuBack', function () {
        menuFunctions.menuBack();
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
    });

    $(document).on('click', '#colorMeRed', function () {
        $('body').css('background-color', '#e60000');
        $('body').removeClass('rainbow');
    });

    $(document).on('click', '#colorMeBlue', function () {
        $('body').css('background-color', '#117ab6');
        $('body').removeClass('rainbow');
    });

    $(document).on('click', '#colorMeGreen', function () {
        $('body').css('background-color', '#4d9900');
        $('body').removeClass('rainbow');
    });

    $(document).on('click', '#colorMeAll', function () {
        $('body').addClass('rainbow');
    });

    menuFunctions.renderNavButtons()
})


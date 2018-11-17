const menuFunctions = {

    /**
     * @function renderMenu - Renders the menu to the page
     */
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

    /**
     * @function menuFunctions.renderMenuBackgrounds - Renders background selectors to the menu
     */
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

    /**
     * @function menuFunctions.renderColorSelectors - Renders color selectors to the Menu
     */
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

    /**
     * @function menuFunctions.closeMenu - Moves board outside of view
     */
    closeMenu: function () {
        $('.menu').removeClass('closeMenuAnimation')
        $('.menu').remove()
        $('.lists').removeClass('listsReturn')
    },

}

/**
* @event listeners - ready all event listeners
*/
$(document).ready(function () {

    /*Click Drag and Scroll*/

    var curDown = false,
        curYPos = 0,
        curXPos = 0;

    $(window).mousemove(function (m) {
        if (curDown === true) {
            $(window).scrollLeft($(window).scrollLeft() + (curXPos - m.pageX));
        }
    });

    $(window).mousedown(function (m) {
        curDown = true;
        curYPos = m.pageY;
        curXPos = m.pageX;
    });

    $(window).mouseup(function () {
        curDown = false;
    });

    /*Click Drag and Scroll*/
    /*Nav and Menu Event Listeners*/

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

    /*Nav and Menu Event Listeners*/
    /*Color Selector Event Listners*/

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

    /*Color Selector Event Listners*/

})
const menuFunctions = {

    renderNavButtons: function () {
        $('.navbar.app').append(
            $('<div>').attr('id', 'createBoard').addClass('TBA').append(
                $('<div>').addClass('fas fa-plus')
            ),
        ),
            $('.navbar.board').append(
                $('<div>').attr('id', 'openMenu').addClass('openMenuButton').append(
                    $('<div>').append(
                        $('<i>').addClass('fas fa-ellipsis-h')
                    ),
                    $('<div>').attr('id', 'openMenu').append(
                        $('<p>').text('Show Menu').css('font-size', '14px').css('margin-left', '8px')
                    )
                ),
            )
    },

    renderMenu: function () {
        let currentBG = $('.navbar.app').css('background-color')
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
        $('.menu').html('')
        $('.menu').append(
            $('<div>').addClass('menuTitle').append(
                $('<div>').attr('id', 'openMenu').addClass('menuBack').append(
                    $('<i>').addClass('fas fa-arrow-left')
                ),
                $('<div>').append(
                    $('<p>').text('Colors')
                ),
                $('<div>').attr('id', 'closeMenu').append(
                    $('<i>').addClass('fas fa-times')
                )
            ),
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

    renderColorSelectors: function() {
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
            $('<div>').addClass('menuContent').append(
                $('<div>').css('background-color', '#cc0000').addClass('colorSel').attr('id', 'colorMeRed'),
                $('<div>').css('background-color', '#126ca0').addClass('colorSel colorSelRight').attr('id', 'colorMeBlue'),
            ),
            $('<div>').addClass('menuContent').append(
                $('<div>').css('background-color', '#408000').addClass('colorSel').attr('id', 'colorMeGreen'),
                $('<div>').css('background-color', '#999999').addClass('colorSel colorSelRight rainbow').attr('id', 'colorMeAll')
            ),
        )
    },

    closeMenu: function() {
        $('.menu').removeClass('closeMenuAnimation')
        $('.menu').remove()
        $('.lists').removeClass('listsReturn')
    },

}

$(document).ready(function () {

    $(document).on('click', '#colorSelector', function() {
        menuFunctions.renderColorSelectors();
    })

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
        $('.navbar.app').css('background-color', '#cc0000');
        $('.ui').css('background-color', '#e60000');
        $('.ui').removeClass('rainbow');
    });

    $(document).on('click', '#colorMeBlue', function () {
        $('.navbar.app').css('background-color', '#126ca0');
        $('.ui').css('background-color', '#117ab6');
        $('.ui').removeClass('rainbow');
    });

    $(document).on('click', '#colorMeGreen', function () {
        $('.navbar.app').css('background-color', '#408000');
        $('.ui').css('background-color', '#4d9900');
        $('.ui').removeClass('rainbow');
    });

    $(document).on('click', '#colorMeAll', function () {
        $('.ui').addClass('rainbow');
        $('.navbar.app').css('background-color', 'rgb(0, 0, 0, 0)')
    });

    menuFunctions.renderNavButtons()
})


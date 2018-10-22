const menuFunctions = {

    renderMenuButtons: function () {
        $('.navbar.app').append(
            $('<div>').attr('id', 'createBoard').addClass('TBA').append(
                $('<div>').addClass('fas fa-plus')
            ),
            // $('<div>').css('background-color', '#cc0000').addClass('colorSel').attr('id', 'colorMeRed'),
            // $('<div>').css('background-color', '#126ca0').addClass('colorSel').attr('id', 'colorMeBlue'),
            // $('<div>').css('background-color', '#408000').addClass('colorSel').attr('id', 'colorMeGreen'),
            // $('<div>').css('background-color', '#999999').addClass('colorSel rainbow').attr('id', 'colorMeAll')
        ),
        $('.navbar.board').append(
            $('<div>').attr('id', 'openMenu').append(
                $('<div>').append(
                    $('<i>').addClass('fas fa-ellipsis-h')
                ),
                $('<div>').addClass('openMenu').append(
                    $('<p>').text('Show Menu').css('font-size', '14px')
                )
            ),
        )
    },

    renderMenu: function () {
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
                $('<div>').addClass('changeBackground menuButton').append(
                    $('<div>').attr('id', 'currentBGColor'),
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

}

    $(document).ready(function () {

        $(document).on('click', '#closeMenu', function() {
            $('.menu').remove()
        })

        $(document).on('click', '#openMenu', function() {
            menuFunctions.renderMenu()
        })

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

        menuFunctions.renderMenuButtons()
    })


$(function () {

    const renderSelectors = function() {
        $('.navbar.app').append(
            $('<div>').css('background-color', '#cc0000').addClass('colorSel').attr('id', 'colorMeRed'),
            $('<div>').css('background-color', '#126ca0').addClass('colorSel').attr('id', 'colorMeBlue'),
            $('<div>').css('background-color', '#408000').addClass('colorSel').attr('id', 'colorMeGreen'),
            $('<div>').css('background-color', '#999999').addClass('colorSel rainbow').attr('id', 'colorMeAll')
        )
    }

    /*
    =======FUNCTIONS=======
    =======================
    ====EVENT LISTENERS====
    */

    $(document).on('click', '#colorMeRed', function() {
        $('.navbar.app').css('background-color', '#cc0000');
        $('.ui').css('background-color', '#e60000');
        $('.ui').removeClass('rainbow');
    });

    $(document).on('click', '#colorMeBlue', function() {
        $('.navbar.app').css('background-color', '#126ca0');
        $('.ui').css('background-color', '#117ab6');
        $('.ui').removeClass('rainbow');
    });

    $(document).on('click', '#colorMeGreen', function() {
        $('.navbar.app').css('background-color', '#408000');
        $('.ui').css('background-color', '#4d9900');
        $('.ui').removeClass('rainbow');
    });

    $(document).on('click', '#colorMeAll', function() {
        $('.ui').addClass('rainbow');
        $('.navbar.app').css('background-color', 'rgb(0, 0, 0, 0)')
    });

    /*
    ====EVENT LISTENERS====
    =======================
    =======================
    */
    renderSelectors()

})
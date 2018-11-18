const navFunctions = {

    /**
     * @function menuFunctions.renderHomePage - Renders the home page
     * @function boardFunctions.renderBoard - Renders Boards
     */
    renderHomePage: function () {
        $('.navbar.board').append(
            $('<div>').addClass('homePage').append(
                $('<div>').addClass('homeLeft').append(

                ),
                $('<div>').addClass('homeCenter').append(

                ),
                $('<div>').addClass('homeRight').append(

                )
            )
        )
        boardFunctions.renderBoard();
    },

    /**
     * @function menuFunctions.renderNotifications - renders notification Box
     */
    renderNotifications: function () {
        $('.navbar.board').append(
            $('<div>').addClass('notificationsBox').append(
                $('<div>').addClass('notificationsTitleBox').append(
                    $('<div>').addClass('notificationsTitle').append(
                        $('<p>').text('Notifications'),
                    ),
                    $('<div>').attr('id', 'closeNotificationsIcon').append(
                        $('<i>').addClass('fas fa-times')
                    ),
                ),
                $('<div>').addClass('notificationsContent').append(

                )
            )
        )
    },

    /**
     * @function menuFunctions.renderInfo - Renders Info Box
     */
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
                            $('<img>').addClass('infoTipImg').attr('src', 'https://a.trellocdn.com/prgb/dist/images/tips/guide-1@1x.3a63a6244ef2e7ade4d6.png'),
                            $('<div>').addClass('infoTipTextBox').append(
                                $('<p>').text('New to Trello? Check Out This Guide').css('font-size', '16px').css('padding', '8px').css('color', '#092d42').css('font-weight', 'bold')
                            )
                        )
                    ),
                    $('<div>').addClass('newTip').append(
                        $('<p>').addClass('').text('Get a new tip')
                    ),
                    $('<div>').addClass('infoLinks').append(
                        $('<a>').addClass('infoLink').attr('href', 'https://trello.com/tour').text('Tour'),
                        $('<a>').addClass('infoLink').attr('href', 'https://trello.com/pricing').text('Pricing'),
                        $('<a>').addClass('infoLink').attr('href', 'https://trello.com/platforms').text('Apps'),
                        $('<a>').addClass('infoLink').attr('href', 'https://blog.trello.com/').text('Blog'),
                        $('<a>').addClass('infoLink').attr('href', 'https://trello.com/privacy').text('Privacy'),
                        $('<a>').addClass('infoLink').text('More...'),
                    )
                )
            )
        );
    },

    /**
     * @function menuFunctions.createBoardBox - Renders Create Board Box
     */
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

    /**
     * @function menuFunctions.renderNavButtons - Renders all Navigation buttons to page
     */
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

                ),
                $('<div>').addClass('rightIcons').append(
                    $('<div>').attr('id', 'createBoardIcon').addClass('navbarRight').append(
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

}

$(document).ready(function () {

    $(document).on('click', '#closeNotificationsIcon', function () {
        $('.notificationsBox').remove();
    });

    $(document).on('click', '#closeInfoIcon', function () {
        $('.infoBox').remove();
    });

    $(document).on('click', '#closeBoard', function () {
        $('.createBoardBox').remove();
    });

    $(document).on('click', '.lists', function () {
        $('.infoBox').remove();
        $('.createBoardBox').remove();
        $('.boardSearchBox').remove();
        $('.notificationsBox').remove();
        $('.createBoardCenter').remove();
        $('body').removeClass('lowerOpacity');
    });

    $(document).on('click', '.homePage', function () {
        $('.infoBox').remove();
        $('.createBoardBox').remove();
        $('.boardSearchBox').remove();
        $('.notificationsBox').remove();
    });

    $(document).on('click', '#goHome', function () {
        let ifHome = $('.homePage').val();
        let iflist = $('.lists').val();
        if (ifHome === undefined) {
            navFunctions.renderHomePage();
            $('.infoBox').remove();
            $('.createBoardBox').remove();
            $('.boardSearchBox').remove();
            $('.notificationsBox').remove();
        } else {
            if (iflist != undefined) {
                $('.homePage').remove();
            }
        }
    });

    $(document).on('click', '.navbarLogo', function () {
        let ifHome = $('.homePage').val();
        if (ifHome === undefined) {
            navFunctions.renderHomePage();
            $('.infoBox').remove();
            $('.createBoardBox').remove();
            $('.boardSearchBox').remove();
            $('.notificationsBox').remove();
        } else {
            $('.homePage').remove();
        }
    });

    $(document).on('click', '#notifications', function () {
        let ifNotificationBox = $('.notificationsBox').val();
        if (ifNotificationBox === undefined) {
            navFunctions.renderNotifications();
            $('.infoBox').remove();
            $('.boardSearch').remove();
        } else {
            $('.notificationsBox').remove();
        }
    });

    $(document).on('click', '#info', function () {
        let ifInfo = $('.infoBox').val();
        if (ifInfo === undefined) {
            navFunctions.renderInfo();
            $('.createBoardBox').remove();
            $('.notificationsBox').remove();
        } else {
            $('.infoBox').remove();
        }
    });

    $(document).on('click', '#createBoardIcon', function () {
        let ifBoard = $('.createBoardBox').val();
        if (ifBoard === undefined) {
            navFunctions.createBoardBox();
            $('.infoBox').remove();
            $('.notificationsBox').remove();
        } else {
            $('.createBoardBox').remove();
        }
    });

    navFunctions.renderNavButtons();
    let lists = $('.lists').val()
    if (lists === undefined) {
        navFunctions.renderHomePage();
    }

})
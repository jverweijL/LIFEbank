AUI().ready('liferay-sign-in-modal', 'event-outside', 'transition', function(A) {   
    // **** LOGIN MENU ****
    var fix_menu = A.one('.fix_menu_login_status');
    var portlet_login = A.one('.portlet-login');
    var portlet_status = A.one('#portlet_status');
    
    if (fix_menu) {
        if (portlet_login || portlet_status) {
            A.one('.navbar-area').addClass('is-sticky');
        }
    } else {
        // **** ACTIONS ON SCROLL ****
        $(window).scroll(function () {
            // ===== Show / Hide Sticky Menu==== 
            if ($(document).scrollTop() > 60 ) {
                $('.navbar-area').addClass('is-sticky');
            } 
            else {
                $('.navbar-area').removeClass('is-sticky');
            }
        });
    }
});
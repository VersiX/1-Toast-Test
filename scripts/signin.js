
//hide/show dropdown
$("#nav-more").click((event) => {
    if ($("#nav-more-dropdown").css("display") == "none") {
        $("#nav-more-dropdown").css({ "display": "block" });
        if (!($("#nav-more").hasClass("nav-item__link--pressed"))) {
            $("#nav-more").addClass("nav-item__link--pressed");
        }
    }
    else {
        $("#nav-more-dropdown").css({ "display": "none" });
        $("#nav-more").removeClass("nav-item__link--pressed");

    }


});

// focus on input on load when in desktop mode
$(window).width() > 805 ? $("#email").focus() : false;


//show hide navigation in mobile mode
$("#header-nav-switch").click((event) => {
    if ($("#navigation").css("display") == "none") {
        $("#navigation").css({ "display": "block" });
    }
    else {
        $("#navigation").css({ "display": "none" });
    }
});

$("#email").focusin((event) => {
    if ($(window).width() < 805) {
        $("#illustration img").css({ "display": "none" });
        $("#form-submit").css({ "display": "block" })

    }

});

$("#email").focusout((event) => {
    if ($(window).width() < 805) {
        $("#illustration img").css({ "display": "flex" });
        $("#form-submit").css({ "display": "none" })
    }
});
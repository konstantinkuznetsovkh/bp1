$(function () {
    $("body").on("click", "a.anchor", function () {
        var idtop = $($(this).attr("href")).offset().top;
        $('html,body').animate({
            scrollTop: idtop
        }, 2222);
        return false;
    });
});
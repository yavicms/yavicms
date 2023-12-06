module.exports = function (form) {

    $(".props-box").click(function () {
        $(this).toggleClass("down")
            .next().toggleClass('hide');
    });

}
const { socket, events, $doc } = require("../lib");
const container = $(document.getElementById("container"));
const main = document.getElementById("main");

/**
 * Ẩn/hiện sidebar
 */
$(".toggle-sidebar").click(function () {
    container.toggleClass("show-bar");
});

events.on("spa", function (uri) {
    spa(socket, uri, function (html) {

        let $container = $(html).find("#container");

        main.html($container.find("#main").html());

        container.attr("class", $container.attr("class"));
    })
});

/**
 * Chạy single page
 */
$doc.on("click", ".spa", function (e) {

    let $this = $(this);

    Promise.all([
        e.preventDefault(),

        /**
        * Lấy mã nguồn HTML từ server
        */
        events.emit("spa", this.href),

        new Promise(function (success) {
            success();

            if (!$this.hasClass("in-sidebar")) return;
            /**
             * Xóa class "show-bar" của .container
             */
            container.removeClass("show-bar");
            /**
             * Xóa số thông báo trong attribute "data-count"
             */
            if ($this.attr('data-count') !== undefined) $this.attr("data-count", 0);
        })
    ]);
});

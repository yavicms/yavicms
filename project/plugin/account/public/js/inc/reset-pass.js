const template = require("../lib/template");

/**
 * Sau khi đổi mật khẩu thành công thì:
 * - server: update database
 * - client:
 *      - xóa các cookie: login
 *      - set cookie: token
 *      - chuyển đến trang chủ: /
 */

page("/account/reset-pass", function () {

    if (cookie.get("verify") !== "reset-pass") return template.to("/account/forgot");

    template({
        title: "Đổi mật khẩu mới",
        inputs: [
            { name: "password", text: "Mật khẩu mới" },
            { name: "repassword", text: "Xác nhận mật khẩu" }
        ],
        button: "Gửi"
    },
        function (info) {
            return ajax.post("/account/reset-pass", info.values)
                .then(function (r) {
                    cookie.remove("login", "verify");
                    cookie.set("token", r.data.token, 30);
                    document.location.href = "/";
                })
        });
});
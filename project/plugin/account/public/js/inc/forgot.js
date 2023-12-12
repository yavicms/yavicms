const template = require("../lib/template");

/**
 * Sau khi gửi thông tin email/phone thì:
 * - server gửi mã xác nhận đến email/phone
 * - client thì:
 *      - set cookie: {login: email/phone, verify: "forgot-pass"}
 *      - chuyển đến trang /account/verify
 */

page("/account/forgot", function () {

    template({
        title: "Quên mật khẩu ?",
        inputs: [{ name: "login", text: "Email hoặc Số điện thoại" }],
        button: "Lấy mã",
        register: 1
    }, function (info) {
        return ajax.post("/account/forgot", info.values)
            .then(function () {
                cookie.time(3).set({
                    login: info.values.login,
                    verify: "forgot-pass"
                });
                template.to("/account/verify");
            });
    });
});
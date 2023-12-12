const template = require("../lib/template");

/**
 * Sau khi đăng kí thành công, thì:
 * - Server gửi mã xác nhận đến Email;
 * - Client: 
 *      - set cookie: {login: email/phone, verify: "register"}
 *      - chuyển đến trang /account/verify
 */

page("/account/register", function () {

    if (template.verify()) return;

    template({
        title: "Đăng kí",
        inputs: [
            { name: "fullname", text: "Tên đầy đủ" },
            { name: "login", text: "Email hoặc Số điện thoại" },
            { name: "password", text: "Mật khẩu" }
        ],
        button: "Đăng kí",
        redirect: { name: "login", text: "Đăng nhập" },
    }, function (info) {
        return ajax.put("/account/register", info.values)
            .then(function () {
                cookie.time(3).set({
                    login: info.values.login,
                    verify: "register"
                });
                template.to("/account/verify");
            });
    });
});
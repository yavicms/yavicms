const template = require("../lib/template");

/**
 * Sau khi đăng nhập thành công thì:
 * - server gửi token xuống client
 * - client thì:
 *      - set cookie: {token}
 *      - nếu có các cookie như: "login/verify", thì xóa đi
 *      - tải lại trang web nếu url hiện tại không phải là: /account/, /account/login
 *        hoặc redirect đến trang chủ: /
 */

page(["/account/", "/account/login"], function () {

    if (template.verify()) return;

    template({
        title: "Đăng nhập",
        inputs: [
            { name: "login", text: "Email hoặc Số điện thoại" },
            { name: "password", type: "password", text: "Mật khẩu" }
        ],
        button: "Đăng nhập",
        redirect: { name: "forgot", text: "Quên mật khẩu ?" },
        register: 1
    }, function (info) {
        return ajax.post("/account/login", info.values)
            .then(function (r) {
                cookie.remove("login", "verify");
                cookie.time(30).set("token", r.data.token);

                switch (document.location.pathname) {
                    case "/account":
                    case "/account/":
                    case "/account/login":
                        document.location.href = "/";
                        break;

                    default:
                        document.location.reload();
                        break;
                }
            });
    });
});
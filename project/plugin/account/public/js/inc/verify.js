const template = require("../lib/template");

/**
 * Sau khi xác nhận mã xong thì:
 * 
 * - server thì:
 *      - update database
 * 
 * - client thì:
 *      - xóa các cookie liên quan
 *      - chuyển đến trang:
 *          - nếu là forgot thì chuyển đến trang /account/reset-pass
 *          - nếu là đăng kí thì chuyển đến trang chủ: /
 */

page("/account/verify", function () {
    var options = {
        title: "Nhập mã xác nhận",
        button: "Gửi",
        inputs: [{ name: "code", text: "Mã xác nhận" }]
    };

    if (!cookie.has("login")) options.inputs.unshift({ name: "login", text: "Email hoặc Số điện thoại" });

    template(options, function (info) {

        if (!info.values.login) info.values.login = cookie.get("login");

        return ajax.post("/account/verify", info.values)
            .then(function (r) {

                var type_validate = cookie.get("verify");

                cookie.remove("login", "verify");
                cookie.time(30).set("token", r.data.token);

                switch (type_validate) {
                    case "forgot":
                        template.to("/account/reset-pass");
                        break;

                    case "register":
                        document.location.href = "/";
                        break;
                }
            });
    });
});
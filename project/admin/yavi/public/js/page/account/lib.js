const $notext = "",
    reg = {
        username: /^[a-zA-Z0-9\.\-\_\@]{5,100}$/,
        password: /^[^\n\r\t]{8,200}$/,
        clean_username: /\n\r\t/g
    };

module.exports = [
    {
        page: ["login"],
        name: "username",
        validate(value, callback) {
            value = value.replace(reg.clean_username, $notext);
            if (reg.username.test(value)) return value;
            callback && callback(this.error);
        },
        error: "Username hoặc Email không đúng,<br>xin vui lòng thử lại."
    },
    {
        page: ["login"],
        name: "password",
        validate(value, callback) {
            value = value.replace(reg.clean_username, $notext);
            if (reg.password.test(value)) return value;
            callback && callback(this.error);
        },
        error: "Mật khẩu không đúng,<br>xin vui lòng thử lại."
    }
];
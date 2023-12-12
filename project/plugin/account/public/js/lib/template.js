const { user_validate, $notext } = yavi;
const template = `
<div class="container">
    <div class="header">:: title ::</div>
    <form id="form-account">

        ::
        for (var i = 0, n = inputs.length, input; i < n; i++) {
            input = inputs[i];
        ::
        <div class="group">
            <label for="::input.name::">::input.text:::</label>
            <input type="::input.type || 'text'::" id="::input.name::" class="input" name="::input.name::">
            <div class="error empty"></div>
        </div>
        :: } ::

        <div class="group empty error" id="form-error"></div>

        <div class="group relative action">
            <span class=":: this.redirect ? 'absolute right center' : 'block text center' ::">
                <button type="submit" name="button">:: button ::</button>
            </span>
            :: if(this.redirect){ ::
            <span class="absolute left center">
                <a class="account-spa" href="/account/:: redirect.name ::">:: redirect.text ::</a>
            </span>
            :: } ::
        </div>
    </form>
    :: if(this.register){ ::
    <div class="footer" style="font-size:1.1em;">
        Hoặc <a class="account-spa" href="/account/register">tạo tài khoản mới</a>
    </div>
    :: } ::
</div>
`;
const Message = `
<div>
    :: lang(message) ::
    <div style="text-transform: lowercase;">
        <span style="text-transform: capitalize;">:: lang("let") ::</span>
        <a href="/account/verify" class="account-spa" style="padding:0 0.3em;">
            :: lang("confirm") ::
        </a>
        <span>:: lang("now") ::</span>
    </div>
</div>
`;

function Template(options, callback) {

    if (Template.signed()) return;

    const account_box = View(template, options);

    document.title = options.title
    View.render("#account-location", account_box);

    let form, wait, box = $(account_box);

    function disable(value) {
        wait = value;
        form.button.disabled = value;
    };

    function error_action(info) {

        var input = form[info.name], message;

        switch (info.message) {
            case "unknown":
                document.location.href = "/";
                return;

            case "error_verify":
                message = View(Message, info);
                cookie.time(3).set({
                    login: input.value,
                    verify: "register"
                });
                break;

            default:
                message = lang(info.message);
                break;
        }

        box.find(".error").html($notext);

        if (input) {
            input.focus();
            input.next.html(message);
        }
        else {
            box.find("#form-error").html(lang(info.message));
        }

        disable(false);
    };

    box.on("click", ".account-spa", function (e) {
        e.preventDefault();
        Template.to(this.href);
    });

    box.on("submit", "form", function (e) {
        e.preventDefault();

        if (wait) return;
        if (!form) form = this;
        disable(true);

        var body = {}, fields = [];

        box.find(".input").each(function () {
            body[this.name] = this.value;
            fields.push(this.name);
        });

        user_validate(body, fields)
            .then(function (info) {
                info.values.login = info.values[info.keys.login];
                return info;
            })
            .then(callback)
            .then(disable)
            .catch(error_action);
    });
};

const reg_account = new RegExp("^/account/(.*)");

Object.defineProperties(Template, {
    to: {
        writable: false,
        value(uri) {
            load_page(uri);
            history.pushState(null, $notext, uri);
        }
    },
    verify: {
        writable: false,
        value() {
            if (cookie.get("verify") === "register") {
                Template.to("/account/verify");
                return 1;
            }
        }
    },
    resetPass: {
        writable: false,
        value() {
            if (cookie.get("verify") === "reset-pass") {
                Template.to("/account/reset-pass");
                return 1;
            }
        }
    },
    signed: {
        writable: false,
        value() {
            return cookie.has("token");
        }
    }
});

yavi.on("popstate", function (e) {
    var uri = document.location.pathname;
    load_page(reg_account.test(uri) ? uri : "/account/login");
});

module.exports = Template;
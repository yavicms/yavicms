const { socket, events } = require("./_info");
const { loop } = Yavi;
const plugin_action_link = socket.cms("plugin-action");

const $doc = $(document);
const modal_delete = Modal({
    title: "Xóa plugin",
    content: "Bạn có chắc muốn xóa plugin này không ?",
    btn_ok: "Có",
    btn_cancel: "Không",
    ok() {
        let info = modal_delete.info;

        if (info) socket.post(plugin_action_link, info);

        modal_delete.hide();
        delete modal_delete.info;
    },
    cancel() {
        delete modal_delete.info;
    }
});
function load_done() {
    events.emit("spa", document.location.href);
};

function plugin_active(label, message, type, active) {
    socket.post(plugin_action_link, {
        action: active ? "active" : "deactive",
        name: label.parent(".plugin-info").findOne(".plugin-name").value,
        type
    }, load_done);
};

const modal_action = {
    active(label, form) {
        plugin_active(label, "Deactive", "plugin", true);
    },
    deactive(label, form) {
        plugin_active(label, "Active", "plugin", false);
    },
    delete(label, form) {
        modal_delete.info = {
            action: "delete",
            type: "plugin",
            name: label.parent(".plugin-info").findOne(".plugin-name").val()
        };
        modal_delete.show();
    },
    save(label, form) {

        let name = [];

        loop(form.plugin_name, function (input) {
            if (input.checked) name.push(input.value);
        });

        socket.post(plugin_action_link, { action: "save", name }, load_done);
    }
};

/**
 * Click vào checkbox
 */
$doc.on("click", ".checkable", function (e) {
    this.prev.click();
});

$doc.on("click", ".plugin-action-link", function (e) {

    let btn = this.findOne("input");
    let action = modal_action[btn.value];

    btn.disabled = true;

    action && action(this, document.getElementById("plugin-form"));

    setTimeout(function () { btn.disabled = false; }, 2000);
});

$doc.on("click", "button.theme-link", function () {

    let data = {
        name: this.value,
        type: this.name,
        action: this.attr("action")
    };

    switch (data.action) {
        case "active":
            socket.post(plugin_action_link, data, load_done);
            break;
    }

});

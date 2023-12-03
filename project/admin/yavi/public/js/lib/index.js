const Admin = {}, events = new Yavi.Event();

Object.defineProperty(Admin, "$doc", {
    writable: false,
    value: $(document)
});

Object.defineProperty(Admin, "socket", {
    writable: false,
    value: WS()
});

Object.defineProperty(Admin, "events", {
    writable: false,
    value: events
});

Object.defineProperty(Admin, "reload", {
    writable: false,
    value() {
        events.emit("spa", document.location.href);
    }
});

window.onpopstate = function (e) {
    events.emit("spa", document.location);
};

module.exports = Admin;
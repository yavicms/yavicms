const Admin = {}, events = new yavi.Event();

Object.defineProperties(Admin, {
    "$doc": {
        writable: false,
        value: $(document)
    },
    "socket": {
        writable: false,
        value: WS()
    },
    "events": {
        writable: false,
        value: events
    },
    "reload": {
        writable: false,
        value() {
            events.emit("spa", document.location.href);
        }
    }
});

module.exports = Admin;
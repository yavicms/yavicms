const events = require("./index").events;

window.onpopstate = function (e) {
    events.emit("spa", document.location);
};
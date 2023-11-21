const { loop } = Yavi;
const { socket } = require("./_info");
const $doc = $(document);

$doc.on("submit", "#form-new-post", function (e) {

    e.preventDefault();

    let next = 1,
        data = {
            content: document.getElementById("new-post-content").html()
        };

    loop(this.find('input'), function (input) {
        if (!input.value) next = 0;
        data[input.name] = input.value;
    });

    if (next && data.content == "") return;

    socket.post(socket.cms("admin-new-post"), data, function (message) {
        console.log(message);
    });
});
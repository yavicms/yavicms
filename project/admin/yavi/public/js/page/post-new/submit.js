const { socket } = require('../../lib');
const { loop } = yavi;

module.exports = function (form, $editors, $elements) {

    let [$content, $description] = $editors;
    let [$contentElement, $descriptionElement] = $elements;

    form.onsubmit = function (e) {
        e.preventDefault();

        let form_data = {}, next = 1, value;

        loop(form.querySelectorAll(".input"), function (input) {

            if (value = input.value) {
                form_data[input.name] = value;
            }
            else {
                input.focus();
                next = 0;
                return 1;
            }
        });

        if (next) {

            if (value = $content.getData()) {
                form_data.content = value;
                form_data.search = [
                    form_data.title,
                    $contentElement.innerText.replace(/\r\n\t/g, " ")
                ].join(" ");
                console.log(form_data);
                // socket.api("put", "post-new", form_data);
            }
            else {
                $contentElement.focus();
            }
        }
    };
}
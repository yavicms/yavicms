
module.exports = function (app) {
    app.post("admin", function (request, response, next) {
        response.json(request.body);
        console.log(request.issocket, request.body);
        console.log("post");
    });
}
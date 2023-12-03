
module.exports = function (app) {

    /**
    users = {
        count: { },
        list: [
            {
                _id: new ObjectId("65638997612398c1cad79bee"),
                props: [Array],
                search: [Array],
                password: '$2b$13$rXY87Aw8qnlSuovzqXz3xOmsBsu7axPmhviR0bFst/eX90oRQNBRi',
                active_key: null,
                createdAt: 2023 - 11 - 26T18:08: 23.500Z,
                updatedAt: 2023 - 11 - 26T18:08: 23.500Z
            }
        ]
    }
    */
    app.content("admin:content:comments", function (req) {

        return app.get_data("admin:comments", req)
            .then((comments) => app.view("page.comments", req, { comments }))
            .catch(() => app.view("error", req));
    });
}
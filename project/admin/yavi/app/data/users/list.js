const User = require('yavi/db/mongo/users');
const { is } = require('yavi/lib');

module.exports = function (app) {

    /**
     * Lấy danh sách users
     * info: { limit, page, fields }
     */
    app.data("admin.users.list", async function (req) {

        let info = req.query, $limit, $page, conditions = [];

        /**
         * Lấy theo role
         */
        if (info.role && info.role.length) {
            conditions.push({ $match: { "props.k": "role", "props.v": info.role } });
        }

        /**
         * Phân trang
         */
        $limit = Number(info.limit);
        $page = Number(info.page);

        if (!is.limit($limit)) $limit = 10;
        if (!is.limit($page)) $page = 1;

        conditions.push({ $skip: ($page - 1) * $limit }, { $limit });

        /**
         * Lấy danh sách users
         */
        return {
            count: {},
            list: await User.aggregate(conditions)
        };
    });
}
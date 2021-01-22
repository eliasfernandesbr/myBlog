const Sequelize = require("sequelize");
const connect = new Sequelize("myblog", "root", "409079", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = connect;
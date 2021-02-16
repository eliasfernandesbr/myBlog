const Sequelize = require("sequelize");
const connect = require("../database/connection");
const Category = require("../categories/category")

const Article = connect.define("articles", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});
Category.hasMany(Article); //UMA CATEGORIA TEM MUITOS ARTIGOS
Article.belongsTo(Category);// UM ARTIGO PERTENCE A UMA CATEGORIA

// Article.sync({force: true})// VAI CRIAR A TABELA SEMPRE QUE EXECUTAR OU CHAMAR ESTE MÉTODO

module.exports = Article;

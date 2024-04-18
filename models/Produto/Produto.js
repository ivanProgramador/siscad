const Sequelize = require("sequelize");
const connection = require("../../database/database");
const Tipo = require("../Tipo/Tipo");

const Produto = connection.define('produto',{
    codigo:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    descricao:{
        type: Sequelize.STRING,
        allowNull:false
    },
    preco:{
        type: Sequelize.DOUBLE(),
        allowNull:false
    }
});

Produto.belongsTo(Tipo);
Produto.sync({force:false});
module.exports = Produto;



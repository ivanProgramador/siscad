const Sequelize = require("sequelize");
const connection = require("../../database/database");

const Pedido = connection.define('pedido',{
    cliente:{
        type: Sequelize.INTEGER,
        allowNull:false
    }
});

Tipo.sync({force:false});
module.exports = pedido;
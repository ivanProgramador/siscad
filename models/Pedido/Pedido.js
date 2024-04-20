const Sequelize = require("sequelize");
const connection = require("../../database/database");

const Pedido = connection.define('pedido',{
    cliente:{
        type: Sequelize.STRING,
        allowNull:false
    }
});

Pedido.sync({force:false});
module.exports = Pedido;
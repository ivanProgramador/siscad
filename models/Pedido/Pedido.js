const Sequelize = require("sequelize");
const connection = require("../../database/database");

const Pedido = connection.define('pedido',{
    cliente:{
        type: Sequelize.STRING,
        allowNull:false
    },
    status:{
        type: Sequelize.INTEGER,
        allowNull:false
    }
});

Pedido.sync({force:true});
module.exports = Pedido;
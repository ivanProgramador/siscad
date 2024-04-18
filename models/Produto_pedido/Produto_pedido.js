const Sequelize = require("sequelize");
const connection = require("../../database/database");
const Produto = require("../Produto/Produto");

const Produto_pedido = connection.define('produto_pedido',{

    cliente:{
        type: Sequelize.STRING,
        allownull:false
    },
    produto_descricao:{
        type: Sequelize.STRING,
        allownull:false
    },
    quantidade:{
        type: Sequelize.DOUBLE,
        allownull:false
    },
    produto_codigo:{
        type: Sequelize.INTEGER,
        allownull:false
    }
    
    
   
});

Produto_pedido.hasMany(Produto);
Produto_pedido.sync({force:false});
module.exports = Produto_pedido;
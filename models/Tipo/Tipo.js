const Sequelize = require("sequelize");
const connection = require("../../database/database");

const Tipo = connection.define('tipo',{
    codigo:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    descricao:{
        type: Sequelize.STRING,
        allowNull:false
    }
});

Tipo.sync({force:false});
module.exports = Tipo;


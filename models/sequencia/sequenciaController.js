const express = require("express");
const router = express.Router();
const Produto = require("../Produto/Produto");
const Tipo = require("../Tipo/Tipo");

//formulario de inicio de sequencia

router.get("/inicio_pedido",(req,res)=>{
    res.render("sequencia/inicio_pedido");

});







module.exports = router;
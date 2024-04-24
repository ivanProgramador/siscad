const express = require('express');
const router = express.Router();
const Pedido = require('./Pedido');
const Produto_pedido = require('../Produto_pedido/Produto_pedido');

router.get("/pedidos",(req,res)=>{
   
    Pedido.findAll().then(pedidos=>{
        res.render("pedidos/index",{pedidos:pedidos});
    })
});

router.post("/pedido_apagar",(req,res)=>{
    var id = req.body.id;

    Pedido.destroy({where:{id:id}}).then(()=>{
         res.redirect("/pedidos");
    });

});

router.get('/pedidos_detalhe',(req,res)=>{
    var pedido_id = req.body.id;

    Produto_pedido.findAll({where:{pedido_id:pedido_codigo}}).then(lista_produtos=>{

        res.render("pedidos/index",{pedidos:pedidos,lista_produtos});

    })


})



module.exports = router;
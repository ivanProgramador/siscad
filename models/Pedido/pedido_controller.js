const express = require('express');
const router = express.Router();
const Pedido = require('./Pedido');

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

})



module.exports = router;
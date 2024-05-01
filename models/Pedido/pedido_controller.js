const express = require('express');
const router = express.Router();
const Pedido = require('./Pedido');
const Produto_pedido = require('../Produto_pedido/Produto_pedido');

router.get("/pedidos",(req,res)=>{
   
    Pedido.findAll().then(pedidos=>{
        res.render("pedidos/index",{pedidos:pedidos});
    })
});

router.post("/apagar_pedido",(req,res)=>{

    var {id_pedido} = req.body;
 
     Pedido.destroy({
     where: {
       id: id_pedido,
     }
   }).then(()=>{
 
     Produto_pedido.destroy(
         {where: {
             pedido_codigo: id_pedido,
           }
         }
     ).then(()=>{
 
         res.redirect("/inicio_pedido");
 
     }
 
     )  
   })
 })

router.get('/pedidos_detalhe',(req,res)=>{
    var pedido_id = req.body.id;

    Produto_pedido.findAll({where:{pedido_id:pedido_codigo}}).then(lista_produtos=>{

        res.render("pedidos/index",{pedidos:pedidos,lista_produtos});

    })


})



module.exports = router;
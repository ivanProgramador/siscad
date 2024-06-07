
const express = require("express");
const router = express.Router();
const Produto_pedido = require("../Produto_pedido/Produto_pedido");
const Pedido = require("../Pedido/Pedido");


/*
 A comanda tem 3 estados
 1 - idle(quando o pedido ainda esta em andamento e os produtos ainda estão sendo inseridos) 
 2 - esperando(quando ela vai para o painel de comandas )
 3 - finalizada (ja foi entregue ao cliente nisso ela deve sair da memoria do sistema e do painel de senha)    
*/

//rota de exibição 

 router.get('/lista_comandas',(req,res)=>{



   Pedido.findAll({where:{status:2}}).then(pedidos=>{


       Produto_pedido.findAll().then(produtos_pedidos=>{

         res.render('comandas/painel_index',{pedidos:pedidos,produtos_pedidos:produtos_pedidos});

        
      
        

      });

      


      




       });
  });

 router.post('/expedir',(req,res)=>{
   var produto_exped = req.body.Pedido;

   Produto_pedido.update({where:{id:id}})
    
 })




module.exports = router;
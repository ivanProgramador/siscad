
const express = require("express");
const router = express.Router();
const Produto_pedido = require("../Produto_pedido/Produto_pedido");
const Pedido = require("../Pedido/Pedido");
const { where, ARRAY } = require("sequelize");






/*
 A comanda tem 3 estados
 1 - idle(quando o pedido ainda esta em andamento e os produtos ainda estão sendo inseridos) 
 2 - esperando(quando ela vai para o painel de comandas )
 3 - finalizada (ja foi entregue ao cliente nisso ela deve sair da memoria do sistema e do painel de senha)    
*/

//rota de exibição 

 router.get('/lista_comandas',(req,res)=>{

   
   async function pegaPedido(){
          Produto_pedido.findAll().then(produto_pedido=>{

            console.log(produto_pedido);

          })
         



   }

   pegaPedido();
    

   



    
  


})

module.exports = router;
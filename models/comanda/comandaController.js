
const express = require("express");
const router = express.Router();
const Produto_pedido = require("../Produto_pedido/Produto_pedido");
const Pedido = require("../Pedido/Pedido");
const { where } = require("sequelize");






/*
 A comanda tem 3 estados
 1 - idle(quando o pedido ainda esta em andamento e os produtos ainda estão sendo inseridos) 
 2 - esperando(quando ela vai para o painel de comandas )
 3 - finalizada (ja foi entregue ao cliente nisso ela deve sair da memoria do sistema e do painel de senha)    
*/

//rota de exibição 

 router.get('/lista_comandas',(req,res)=>{

    

       Pedido.findAll({where:{status:2}}).then(pedidos=>{

           pedidos.map(pedido=>{
            
              Produto_pedido.findAll({raw:true,where:{pedido_codigo: pedido.id},attributes:['produto_descricao','quantidade']}).then(produtos_pedido=>{

               var comanda = {
                  numero_pedido: pedido.id,
                  pedido_cliente: pedido.cliente,
                  data_hora: pedido.createdAt,
                  produtos_comanda: produtos_pedido
               }

                res.send(comanda);

              });
             
           });
       })




    
})

module.exports = router;
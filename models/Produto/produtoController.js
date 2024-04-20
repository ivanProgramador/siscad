const express = require("express");
const router = express.Router();
const Produto = require("./Produto");
const Tipo = require("../Tipo/Tipo");


router.get('/produtos',(req,res)=>{
    Produto.findAll({
        include:[{model:Tipo}]
    }).then(produtos=>{

        res.render('admin/produtos/index',{produtos:produtos});

    })
});

router.get('/produto/cadastro',(req,res)=>{

   Tipo.findAll().then(tipos=>{
     res.render('admin/produtos/cadastro',{tipos:tipos});
 })

});

router.post('/produto/cadastrar',(req,res)=>{

   //verificar o erro que acontece quando um produto e cadastrado com , ao inves de .
    var{ codigo,descricao,preco,tipoId }= req.body;

   

    Produto.create({
        codigo:codigo,
        descricao:descricao,
        preco:preco,
        tipoId:tipoId
     }).then(()=>{
        res.redirect("/produtos");
     })
 });


 router.get("/produto/editar/:id",(req,res)=>{

    var id = req.params.id;

    Produto.findOne({where:{id:id}}).then(produto=>{

        Tipo.findAll().then(tipos=>{
            res.render("admin/produtos/edit",{produto:produto,tipos:tipos});
    
        });
   });
});

router.post("/produto/atualizar",(req,res)=>{

    var{ id, codigo,descricao,preco,tipoId }= req.body;

    Produto.update({
         id:id,
         codigo:codigo,
         descricao:descricao,
         preco:preco,
         tipoId:tipoId 
    },{where:{id:id}}).then(()=>{
        res.redirect('/produtos')
    })


})


router.post("/produto/deletar",(req,res)=>{

    var id = req.body.id;

    Produto.destroy({where:{id:id}}).then(()=>{
        res.redirect("/produtos");
    })

})






module.exports = router;
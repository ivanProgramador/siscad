const express = require("express");
const router = express.Router();
const Tipo = require("./Tipo");




//rotas de views

//lista de tipos

router.get("/tipos",(req,res)=>{
    Tipo.findAll().then(tipos=>{
        res.render("admin/tipos/index",{tipos:tipos});
    })
});



//formulario de cadastro

router.get("/tipos/cadastro",(req,res)=>{

    res.render("admin/tipos/cadastro");
});

router.post("/tipos/cadastrar",(req,res)=>{
    
    var {codigo,descricao} = req.body;
    
    Tipo.create({codigo:codigo,descricao:descricao}).then(()=>{

        res.redirect("/tipos");

     })
})






//formulario de edição

router.get("/tipos/atualizar/:id",(req,res)=>{

    var id = req.body.id;

    Tipo.findOne({id:id}).then(tipo=>{

        res.render("admin/tipos/edit",{tipo:tipo});

    });
    
});

router.post("/tipo/atualizar",(req,res)=>{
    var id = req.body.id;
    var codigo = req.body.codigo;
    var descricao = req.body.descricao;

    Tipo.update({codigo:codigo,descricao:descricao},{where:{id:id}}).then(()=>{
        res.redirect("/tipos")
    })
})


router.post("/tipo/apagar/",(req,res)=>{

    var id = req.body.id;
    

    Tipo.destroy({where:{id:id}}).then(()=>{

        res.redirect("/tipos");
    })

})



module.exports = router;
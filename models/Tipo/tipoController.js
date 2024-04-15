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

//formulario de edição

router.get("/tipos/atualizar/:id",(req,res)=>{

    var id = req.body.id;

    Tipo.findOne({id:id}).then(tipo=>{

        res.render("admin/tipos/edit",{tipo:tipo});

    });
    
});

//rotas de ação 

module.exports = router;
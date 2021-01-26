const { Router } = require("express");
const express = require("express");
const express = express.Router();

router.get("/categoria", (req, res)=>{
    res.send("ROTA DE CATEGORIAS")

});

router.get("/admin/categories/new", (req, res)=>{
    res.send("ROTA PARA CRIAR UMA NOVA CATEGORIA")
});

module.exports = router;
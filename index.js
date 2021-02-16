const express = require("express"); //carrega o módulo do express
const app = express(); //cria uma instância do express
const bodyParser = require ("body-parser"); //Utilitário que serve para receber dados de qualquer formulário;
const connect = require ("./database/connection");

//IMPORTANDO CATEGORIES
const categoriesController = require("./categories/categoriesController")
const articlesController = require("./articles/articlesController")

//BODY PARSER
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const Article = require("./articles/article");
const Category = require("./categories/category")

//VIEW ENGINE
app.set("view engine", "ejs");

//STATIC - PARA QUE O EXPRESS POSSA TRABALHAR COM ARQUIVOS ESTÁTICOS, CSS, IMAGEM ETC
app.use(express.static("public"));


//DATABASE

connect
.authenticate()
.then(()=>{
    console.log("Conexão feita com sucesso");
}).catch((error)=>{
    console.log(error);
});

app.use("/categoriasPrefixo", categoriesController);
app.use("/", articlesController);

app.get("/", (req, res)=>{ //cria uma rota principal (home)
    res.render("index");
})

app.listen(3000, ()=>{ //starta a porta local host e da a callback indicando que o servidor está rodando
    console.log("O servidor está rodando!"); // sempre que o sevidor for executado essa função será chamada;
})
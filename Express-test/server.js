const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));


app.get("/",(req, res) =>{
    res.write("Hello world");
    res.send();
});

app.get("/hello",(req, res) =>{
    res.write("<h1>Hello again back to you</h1>");
    res.write("<ul><li>Item 1</li><li>Item 2</li></ul>");

    res.send();
});

app.get("/product",(req, res) =>{
    console.log(__dirname);
    res.sendFile(__dirname + "/public/html/index.html");
    
});

app.get("/sellProduct",(req, res) =>{
    var prodName = req.query.name;
    res.write("This is a great product(express) buy " + prodName + "");
    res.send();
    
});


app.listen(3000, () =>{
    console.log("Server is running on port 3000");
});
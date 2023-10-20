const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.engine("ejs", require("ejs").renderFile);

app.set("view engine", "ejs");


app.get("/hellow",(req, res) =>{
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Hello again back to you</h1>");
    res.write("<ul><li>Item 1</li><li>Item 2</li></ul>");

    res.send();
});

const fruits = [
{name: "apple", qty:3}, 
{name: "grapes", qty:13}, 
{name:"banana", qty: 5}, 
{name: "pinapple-pen", qty: 1}
];

const url = "https://v2.jokeapi.dev/joke/Miscellaneous?amount=2&format=json";

app.route("/joke").get((req, res) => {
    https.get(url, (response) => {
        console.log(response.statusCode);
        if(response.statusCode==200){
            response.on("data", (data)=>{
                var jokes = JSON.parse(data);
                console.log(jokes);
                res.setHeader("Content-Type", "text/html");
                jokes.jokes.forEach((joke) => {
                    console.log(jokes);
                    res.write(
                        "<h2>" + joke.setup + "</h2><br/><p>" + joke.delivery + "</p>"
                    );
                });
                res.send();
            });
        }
    });
});


app.route("/").get((req, res) =>{
    console.log(__dirname);
    res.render("index",{ name: "Julian", fruits: fruits});
})
.post((req, res) => {
    var fruit = req.body.fruit;
    var qty = req.body.qty;
    fruits.push({ name: fruit, qty: qty});
    res.redirect("/");
});

app
.route("/sellProduct")
.get((req, res) => {
    var prodName = req.query.productName;
    res.write("This is a great product from get method(express) buy " + prodName + "");
    res.send();
    
})
.post((req, res) =>{
    var prodName = req.body.productName;
    res.write("This is a great product from post method (express) buy " + prodName + "");
    res.send();
    
}).put().delete().patch();

app.get("/sellProduct/:productName.:model/detail",(req, res) =>{
    var prodName = req.params.productName;
    var model = req.params.model;
    res.write("This is a great product from get method V2(express) buy " + 
    prodName + 
    " " + 
    model  
    
    );
    res.send();
    
});

app.use((err, req, res, nect)=>{
    console.error(err.message);
    res.status(500).send("There was an error in the app.") ;
});



app.listen(3000, () =>{
    console.log("Server is running on port 3000");
});
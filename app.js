const express = require ('express');
const app = express ();
const path = require('path');


app.listen(3003, () => console.log("Servidor corriendo en el 3003"));

app.use(express.static("public"));

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, './views/home.html'))
})

app.get('/register', function (req, res){
    res.sendFile(path.join(__dirname, './views/register.html'))
})

app.get('/login', function (req, res){
    res.sendFile(path.join(__dirname, './views/login.html'))
})

app.post('/', function (req, res){
    res.sendFile(path.join(__dirname, './views/home.html'))
})


//npm init -y
//npm i express
//npx nodemon app


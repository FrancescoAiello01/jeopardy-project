// HOW TO START MONGODB ON YOUR MAC:
// brew services start mongodb
// brew services stop mongodb
// NOT SURE IF YOU NEED TO BE IN THE BACKEND FOLDER OR NOT

var http = require("http");
var express = require('express');
var mydb = require("./db");
var bodyParser = require('body-parser');


var app = express();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/allQuestions', (req, res) => { // if anyone hits the url /allQuestions, will execute findAll()
    mydb.findAll(req, res)
});

app.post('/api-token-auth', (req, res) => {
    res.send('200');
});

var server = app.listen(process.env.PORT, function () {
    console.log("Server listening at" + process.env.PORT);
})

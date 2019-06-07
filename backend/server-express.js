// HOW TO START MONGODB ON YOUR MAC:
// brew services start mongodb
// brew services stop mongodb
// NOT SURE IF YOU NEED TO BE IN THE BACKEND FOLDER OR NOT

var http = require("http");
var express = require('express');
var mydb = require("./db");
var bodyParser = require('body-parser');
var morgan = require('morgan'); // for console logging of activity
var cors = require('cors'); // for enabling CORS request from angular



var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use(express.static(__dirname));
app.use(cors({ origin: true, credentials: true }));


app.get('/', function (req, res) {
  res.send('API')
})

app.get('/allQuestions', (req, res) => { // if anyone hits the url /allQuestions, will execute findAll()
    mydb.findAll(req, res)
});

app.post('/api-token-auth', (req, res) => {
    mydb.authenticate(req, res);
});

app.post('/updateQuestion', (req, res) => {
  mydb.updateQuestion(req, res);
});

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

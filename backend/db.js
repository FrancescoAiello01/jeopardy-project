const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'questions';
var db;
const client = new MongoClient(url, { useNewUrlParser: true });

var questions = [{
    category: "1",
    question: "How many?",
    answer: "Two"
},
{
    category: "2",
    question: "How many double?",
    answer: "Four"
}
];

client.connect(function (err) {
    if (err == null) console.log("Connected successfully to server");
    else {
        console.log("Error:" + err);
        process.exit(0);
    }
    const db = client.db(dbName);
    insertDocuments(db);
});

const insertDocuments = function (db) {
    const collection = db.collection('jeopardy');
    console.log("Count=" + collection.find({}).count());
    collection.countDocuments({}, function (err, numRecords) {
        console.log("total count right now = " + numRecords);
        if (numRecords == 0) {
            //insert documents
            collection.insertMany(questions, function (err, result) {
                console.log("Inserted " + result.result.n + " documents");
            });
        }
        else {
            console.log("No need to insert documents");
        }
    });
};

const findDocuments = function (req, res) {
    const db = client.db(dbName);
    const collection = db.collection('jeopardy');
    // Find all documents
    collection.find({}).toArray(function (err, docs) {
        if (err != null) {
            console.log("There was an error:" + err);
        }
        console.log("Number of records found:" + docs.length);
        res.send(docs);
    });
};


module.exports.findAll = findDocuments;
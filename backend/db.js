const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'questions';
var db;
const client = new MongoClient(url, { useNewUrlParser: true });

var questions = [
  {
    id: 1, name: 'Geography',
    questions: [
      { questionText: 'What country is also known as Persia?', answer: 'Iran' },
      { questionText: 'In what country would you find Mount Kilimanjaro?', answer: 'Tanzania' },
      { questionText: 'What major river flows through the Grand Canyon?', answer: 'Colorado River' },
      { questionText: 'What name is given to the northeast part of China?', answer: 'Manchuria' }]
  },
  {
    id: 2, name: 'Art',
    questions: [
      { questionText: 'Who painted the Mona Lisa?', answer: 'Leonardo Da Vinci' },
      { questionText: 'Who is credited as the designer of the many statues which decorated the Parthenon?', answer: 'Phidias' },
      { questionText: 'What artist was struck in the face with a mallet by an envious rival, disfiguring him for life?', answer: 'Michelangelo' },
      { questionText: 'What artist is best known for a painting of his mother?', answer: 'Whistler' }]
  },
  {
    id: 3, name: 'Technology',
    questions: [
      { questionText: 'Before being known as PayPal, the company went by what name?', answer: 'Confinity' },
      { questionText: 'Who described the Internet as a series of tubes?', answer: 'Alaska Senator Ted Stevens' },
      { questionText: 'What was the first consumer desktop CPU to achieve 4GHz+ out of the box?', answer: 'AMD FX-4170 (Bulldozer)' },
      { questionText: 'What is the origin of the word "spam" in the context of email spam?', answer: 'A Monty Python skit from the 70s' }]
  },
  {
    id: 4, name: 'Economics', questions: [
      { questionText: 'For most people, the largest protion of their personal income comes from:', answer: 'Wages and salries from their jobs' },
      { questionText: 'When a person rents an apartment, who benefits from the transaction?', answer: 'Both the renter and the landlord' },
      { questionText: 'If the price of beef doubled and the price of poultry stayed the same, people would most likely buy:', answer: 'More poultry and less beef' },
      { questionText: 'Which of the following would most likely accelerate innovation in the computer industry?', answer: 'Greater use of computers by individuals' }]
  },
  {
    id: 5, name: 'Science', questions: [
      { questionText: 'question 1 category 1 ?', answer: 'answer 1 cat 1' },
      { questionText: 'question 1 category 1 ?', answer: 'answer 1 cat 1' },
      { questionText: 'question 1 category 1 ?', answer: 'answer 1 cat 1' },
      { questionText: 'question 1 category 1 ?', answer: 'answer 1 cat 1' }]
  },
  {
    id: 6, name: 'World History',
    questions: [
      { questionText: 'question 1 category 1 ?', answer: 'answer 1 cat 1' },
      { questionText: 'question 1 category 1 ?', answer: 'answer 1 cat 1' },
      { questionText: 'question 1 category 1 ?', answer: 'answer 1 cat 1' },
      { questionText: 'question 1 category 1 ?', answer: 'answer 1 cat 1' }]
  },
  {
    id: 7, name: 'Pop Culture',
    questions: [
      { questionText: 'question 1 category 1 ?', answer: 'answer 1 cat 1' },
      { questionText: 'question 1 category 1 ?', answer: 'answer 1 cat 1' },
      { questionText: 'question 1 category 1 ?', answer: 'answer 1 cat 1' },
      { questionText: 'question 1 category 1 ?', answer: 'answer 1 cat 1' }]
  },
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

const updateQuestion = function (req, res) {
  const db = client.db(dbName);
  const collection = db.collection('jeopardy');
  //Update document
  receivedObject = req.body;
  const { name, questionText } = receivedObject;

  collection.findOne({ name: name }, async function (err, result) {
    if (result) {
      console.log(receivedObject);
      await collection.updateOne({ name: name }, { $set: { questionText: questionText } });
      return res.send("Successfully Updated");
    }
    else {
      console.log("===>", err)
      res.status(400).send(err)
    }
  });

}

const authenticate = function (req, res) {
    if (req.body.username === "cs290" && req.body.password === "spring") {
    res.status(200);
    res.end();
    } else {
    res.status(401);
    res.end();
    }
};


module.exports.findAll = findDocuments;
module.exports.updateQuestion = updateQuestion;
module.exports.authenticate = authenticate;

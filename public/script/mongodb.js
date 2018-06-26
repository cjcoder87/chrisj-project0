const mongodb = require('mongodb');
const dbclient = mongodb.MongoClient;

dbclient.connect('mongodb://localhost:27017', (err, client) => {

if(err){
  console.log.error(err);
client.close();

}

var db = client.db('hellodb');
var people = db.collection('person');
people.insertOne({

  "firstName": "chris1",
  "lastName": "jackson"


}).then(() =>{
  people.find({"firstName":"chris1"}).then((data)=>{
    //{} gives the whole collection
    console.log(data);

  });
});

// client.close();
});
//turning on mondo db
//mongod --config /usr
//find - will search all
//insertOne
//updateOne
//deleteOne
//findOne

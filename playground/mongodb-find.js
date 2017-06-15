//const MongoClient = require('mongodb').MongoClient;

const{MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/Todo', (err, db) => {
  if(err){
    return console.log("MongoDb Error",err);
  }

  console.log("Connected to mongodb server");

  // db.collection('Todos').find({
  //   _id : new ObjectID('59301dc362dc0a1a1c7cc85d')
  // }).toArray().then((docs)=>{
  //     console.log("Todos");
  //     console.log(JSON.stringify(docs, undefined, 2));
  //
  // }, (err) =>{
  //   if(err){
  //     console.log('Unable to fetch');
  //   }
  // });

  db.collection('Users').find({
    name: "Nithin"
  }).toArray().then((docs)=>{
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err)=>{
    if(err)
    {
      console.log("Unable to fetch");
    }

  });


  //db.close();
});

//const MongoClient = require('mongodb').MongoClient;

const{MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/Todo', (err, db) => {
  if(err){
    return console.log("MongoDb Error",err);
  }

  console.log("Connected to mongodb server");

  db.collection("Todos").findOneAndUpdate({
    _id: new ObjectID("59301dc362dc0a1a1c7cc85d")
  },{
      $set:{
        completed:true
      }
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(result);
  });

  //db.close();
});

//const MongoClient = require('mongodb').MongoClient;

const{MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/Todo', (err, db) => {
  if(err){
    return console.log("MongoDb Error",err);
  }

  console.log("Connected to mongodb server");

  // db.collection('Todos').insertOne({
  //     text:'something to do',
  //     completed:false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('unable to insert',err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name:'Nithin',
  //   age:27,
  //   location:'Bangalore'
  // }, (err, result) => {
  //     if(err){
  //       return console.log('unabel to connect');
  //     }
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.close();
});

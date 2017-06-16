const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '594232f08a56129810621916';

// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log(todos);
// }, (e)=>{
//   console.log(e);
// });
//
// Todo.findById(id).then((todos)=>{
//   console.log(todos);
// }).catch((e)=>console.log(e));
User.findById(id).then((user)=>{
  if(!user){
    return console.log('User not found');
  }
  console.log(user);
}).catch((e)=>{
  console.log("wrong id");
});

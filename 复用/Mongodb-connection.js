const express = require('express');
const app = express();
const todoController= require('./controllers/todo')
const mongoose = require('mongoose');// use to connect server and database

//connection usually can put in the app file

// 1. use command line run MongoDB
// C:\Program Files\MongoDB\Server\4.0\bin

// 2. use mongoose connect with mongodb
// if this todoLists database do not exist, it will automatically create it
mongoose.connect('mongodb://localhost/todoLists', { useNewUrlParser: true });

mongoose.connection.once('open',function(){
    console.log('connection has been made');
}).on('error',function(error){
    console.log('connection error',error);
})

// 3. open Robo 3T and click connect 

// 4 use mongoose.Schema create Schema
// let todoSchema = new mongoose.Schema({
//     item: String
// });
// let Todo = mongoose.model('Todo', todoSchema);


app.listen(3000);

// set up template engine

app.set("view engine","ejs");

//static files
app.use(express.static('public'));

//file controllers
todoController(app)





const express = require('express');
const app = express();
const todoController= require('./controllers/todo')
const mongoose = require('mongoose');


// connect to mongodb
mongoose.connect('mongodb://localhost/todoLists', { useNewUrlParser: true });

mongoose.connection.once('open',function(){
    console.log('connection has been made');
}).on('error',function(error){
    console.log('connection error',error);
})

app.listen(3000);

// set up template engine

app.set("view engine","ejs");

//static files
app.use(express.static('public'));

//file controllers
todoController(app)





// use to connect server and database
const mongoose = require('mongoose');



// 4. use mongoose.Schema create Schema
const todoSchema = new mongoose.Schema({
    item: String
});
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;






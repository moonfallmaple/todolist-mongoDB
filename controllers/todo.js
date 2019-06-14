// const data=[{item:'get milk'}, {item:'walk the dog'},{item:'walk the rabbit'}]
const bodyParser= require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended:false})
const mongoose = require('mongoose');

//create a schema - this is like a blueprint
let todoSchema = new mongoose.Schema({
    item: String
});

let Todo = mongoose.model('Todo', todoSchema);


module.exports = function(app){

    app.get('/todo',function(req,res){
        // res.send('Hello world'); send string 
        // res.sendFile(__dirname+ '/index.html'); send HTML PAGE
        // 将index文件格式从html改成ejs，然后放到views文件夹下
        // res.render('todo',{data:data}); 
        Todo.find({}, function(err, data){
            if (err) throw err;
            res.render('todo', {data: data});
        });

    })
    
    app.post('/todo',urlencodedParser, function(req,res){
        // console.log(req.body)
        //get data from the view and add it to mongodb
        let newTodo = Todo(req.body).save(function(err, data){
            if (err) throw err;
            res.json(data);
        });
        
    })
    
    
  
    app.delete('/todo/:item',function(req,res){
        console.log(req.body)
        // delete the requested item from mongodb
        Todo.find({item:req.params.item.replace(/\-/g,'')}).deleteOne(function(err, data){
                if (err) throw err;   
                res.json(data);
            }
        );
    }) 
}


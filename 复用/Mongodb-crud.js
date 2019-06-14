
// find()
// findOne()
// save()
// deleteOne()
// deleteMany()
// updateOne()


//here Todo is the collection 

app.get('/todo',function(req,res){
    //get all data from mongodb
    Todo.find({}, function(err, data){
        if (err) throw err;
        res.render('todo', {data: data});
    });

})

app.post('/todo',urlencodedParser, function(req,res){
    //get data from the view and add it to mongodb
    let newTodo = Todo(req.body);
        newTodo.save(function(err, data){
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


let http=require('http');
let fs=require('fs');

// fs: file system
// res.writeHead: write extra info of response
// res.end: send data back to client ,this method expect either string or buffer
// http.createServer : creates an HTTP Server object, this object can listen to ports on your computer and execute a function, a requestListener, each time a request is made.
// fs.createReadStream : reads sequentially from the current file position
// pipe : pop read stream data to client



// serving HTML pages
let server = http.createServer(function(req,res){
    console.log('request was made:'+ req.url)
    res.writeHead(200,{'Content-Type':'text/html'})
    let myReadStream=fs.createReadStream('./index.html','utf8');
    myReadStream.pipe(res);
})


server.listen(3000,'127.0.0.1');
console.log('now listen to port!');

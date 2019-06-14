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
    if(req.url==='/' || req.url==='/home'){
        res.writeHead(200,{'Content-Type':'text/html'})
        fs.createReadStream('./index.html','utf8').pipe(res);
    }else if(req.url ==='/contact'){
        res.writeHead(200,{'Content-Type':'text/html'})
        fs.createReadStream('./contact.html','utf8').pipe(res);
    }else{
        res.writeHead(404,{'Content-Type':'text/html'})
        fs.createReadStream('./404.html','utf8').pipe(res);
    }
})



server.listen(3000,'127.0.0.1');
console.log('now listen to port!');


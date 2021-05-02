var http=require('http');
const fs=require('fs');
var path=require('path');



var server=http.createServer(function(req,res){
    if(req.url=="/"){
        fs.readFile('index.html',function(error,data){
            res.writeHead(200,{'content-type':'text/html'})
            res.write(data)
            
            res.end();

        })
        
    }
    

    else if(req.url=="/footer"){
        fs.readFile('footer.html',function(error,data){
            res.writeHead(200,{'content-type':'text/html'})
            res.write('<h1>This is footer page</h1>'+ data)
            
            res.end();

        })
        
    }

    else if(req.url=="/cart"){
        fs.readFile('cart.html',function(error,data){
            res.writeHead(200,{'content-type':'text/html'})
            res.write( data)
            
            res.end();

        })
    }

    else if(req.url=="/footer"){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>This is footer page</h1>')
        res.end();
    }

});



server.listen(4040);
console.log("Server Run successfully");
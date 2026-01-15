require("http");

const http=require("http");

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("Hello World! This is the Server Creation Module");
}).listen(8080);
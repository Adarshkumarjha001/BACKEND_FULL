require("http");

const http=require("http");

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("Welcome to the Home Page of Server Creation Module");
    }
    else if(req.url==="/about"){
        res.end("This is the About Page of Server Creation Module");
    }
    
    res.end("Hello World! This is the Server Creation Module");
})

server.listen(3000,()=>{
    console.log("Server is listening on port 3000");
}); 


require("http");

const http=require("http");

const server=http.createServer((req,res)=>{
    
    res.end("Hello World! This is the Server Creation Module");
})

server.listen(3000,()=>{
    console.log("Server is listening on port 3000");
}); 


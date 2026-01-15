require("http");

const http=require("http");

constbhttp.createServer((req,res)=>{
    
    res.end("Hello World! This is the Server Creation Module");
})

http.listen(3000,()=>{
    console.log("Server is listening on port 3000");
}); 


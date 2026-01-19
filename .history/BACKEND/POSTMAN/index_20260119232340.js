const express=require("express");

const app=express();

app.get("/",(req,res)=>{
    res.send("Welcome to the Home Page of Postman Module");
})

app.post("/user",(req,res)=>{
    
})


app.listen(4000,()=>{
    console.log("SErver is listening on port 4000");
})
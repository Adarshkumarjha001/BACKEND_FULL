const express=require("express");

const app=express();

app.use(express.json());

app.use("/user",(req,res)=>{
    res.send("Welcome to the User Page");
},(req,res)=>{
    res.send9
})

app.listen(2000,()=>{
    console.log("Bookstore server is running on port 2000");
})

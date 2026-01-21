const express=require("express");

const app=express();

app.use(express.json());

app.use("")

app.listen(2000,()=>{
    console.log("Bookstore server is running on port 2000");
})

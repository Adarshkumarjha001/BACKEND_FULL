const express=require("express");

const app=express();

app.use(express.json());    

app.post("/data",(req,res)=>{
    const data=req.body;
    res.status(201).send({message:"Data received successfully",data:data});
}



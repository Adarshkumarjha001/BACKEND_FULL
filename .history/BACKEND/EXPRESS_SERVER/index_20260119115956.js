const express=require("express");

const app=express();

app.use("/",(req,res)=>{
    res.send()
})

app.listen(4000,()=>{
    console.log("Express Server is running on port 4000");

});
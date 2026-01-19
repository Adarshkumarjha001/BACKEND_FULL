const express=require("express");

const app=express();

app.use("/",(req,res)=>{
    res.send("Welcome to the Home Page of Express Server Module");
})
app.use()

app.listen(4000,()=>{
    console.log("Express Server is running on port 4000");

});
const express=require("express");

const app=express();

This should always be written at the end to avoid route conflicts with other routes and middlewares because
 it matches all routes and will prevent any routes defined after it from being reached.
// app.use("/",(req,res)=>{
//     res.send("Welcome to the Home Page of Express Server Module");
// })

app.use("/about/:id",(req,res)=>{
    console.log(req.params);
    res.send("This is the About Page of Express Server Module");
})

app.use("/contact",(req,res)=>{
    res.send("This is the Contact Page of Express Server Module");
})

app.use("/",(req,res)=>{
    res.send("Welcome to the Home Page of Express Server Module");
})



app.listen(4000,()=>{
    console.log("Express Server is running on port 4000");

});
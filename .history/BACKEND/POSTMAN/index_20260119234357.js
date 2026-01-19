const express=require("express");

const app=express();

// This is a middleware to parse JSON bodies from incoming requests and attach them to req.body object in the request object of express 
app.use(express.json());

app.get("/user",(req,res)=>{
    console
    res.send("Welcome to the Home Page of Postman Module");
})

app.post("/user",(req,res)=>{
    console.log(req.body);
    // console.log(typeof req.body.age);
    res.send("Welcome to the User Page of Postman Module");
})


app.listen(4000,()=>{
    console.log("Server is listening on port 4000");
})

const express=require("express");

const app=express();

// T
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome to the Home Page of Postman Module");
})

app.post("/user",(req,res)=>{
    console.log(req.body);
    // console.log(typeof req.body.age);
    res.send("Welcome to the User Page of Postman Module");
})


app.listen(4000,()=>{
    console.log("SErver is listening on port 4000");
})
const express=require("express");

const app=express();

app.use(express.json());

app.use("/user",(req,res)=>{
    console.log("This is the first middleware");
    res.send("Welcome to the User Page");
    console.log("Request processed in first middleware");
    //because of tcp connection ans socket the response can be sent only once when client request so tcp connection gets closed after first res.send() call
    // res.send("Trying to send response again");
    //the below callback fn will not be executed because response is already sent to the client and tcp connection is closed and fn is also finished executing
},(req,res)=>{
    console.log("This is the second middleware");
    res.send("This is the second middleware");
})

app.listen(2000,()=>{
    console.log("Bookstore server is running on port 2000");
})


//api is a functiona
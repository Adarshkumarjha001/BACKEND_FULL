const express=require("express");

const app=express();

app.use(express.json());

/*
app.use("/user",(req,res)=>{
    console.log("This is the first middleware");
    // res.send("Welcome to the User Page");
    console.log("Request processed in first middleware");
    //do not leave the response open without sending any response back to client otherwise client will keep waiting for response indefinitely
    //because of tcp connection ans socket the response can be sent only once when client request so tcp connection gets closed after first res.send() call
    // res.send("Trying to send response again");
    //the below callback fn will not be executed because response is already sent to the client and tcp connection is closed and fn is also finished executing
},(req,res)=>{
    console.log("This is the second middleware");
    res.send("This is the second middleware");
})
    */

// ye jo callback fn hai (req,res,next) ise route handler bhi kaha jata hai 
app.use("/user",(req,res,next)=>{
    console.log("FIRST");
    next();
    console.log("FIFTH");
},(req,res,next)=>{
    console.log("SECOND");
    next();
    console.log("SIXTH");
},(req,res,next)=>{
    console.log("THIRD");
    res.send("Welcome to the User Page");
    console.log("FOURTH");
    next();
},(req,res)=>{  
)



app.listen(2000,()=>{
    console.log("Bookstore server is running on port 2000");
})



// api is a function call that takes request and response as argument and process the request and send response back to client
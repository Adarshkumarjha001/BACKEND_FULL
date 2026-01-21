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

// ye jo callback fn hai (req,res,next) ise route handler bhi kaha jata hai aur we can keep them in array also
// app.use("/user",[RH,RH1,RH2,...],RH) AISE BHI LIKH SAKTE HAIN
// JO FINAL ANS DEGA WOH HOTA H REQEST HANDLER AUR JISKE BICH SE GUJAR KE JANA HOTA HOTA HAI WOH HOTA HAI MIDDLEWARE(THEY DO NOT SEND RESPONSE BACK TO CLIENT THEY JUST PROCESS THE REQEST AND PASS IT FORWARD USING NEXT() FUNCTION)

app.use("/user",[(req,res,next)=>{
    console.log("FIRST");
    next();
    console.log("FIFTH");
},(req,res,next)=>{
    console.log("SECOND");
    next();
    console.log("SIXTH");
},(req,res,next)=>{
    console.log("THIRD");
    // res.send("Welcome to the User Page");
    console.log("FOURTH");
    next();
},(req,res)=>{   
    console.log("FIFTH23444");
    res.send("This is the last middleware");
}
]
)

//usecaes of middleware
//1. authentication and authorization
//2. logging
//3. error handling
//4. security
//5. compression



app.listen(2000,()=>{
    console.log("Bookstore server is running on port 2000");
})



// api is a function call that takes request and response as argument and process the request and send response back to client
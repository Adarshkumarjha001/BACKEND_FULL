const express=require("express");

const app=express();

app.use(express.json());

const BOOKSTORE=[
    {id:1,name:"Harry Porter",age:34,description:"A fantasy novel"},
    {id:2,name:"The Hobbit",age:45,description:"A fantasy novel by J.R.R. Tolkien"},
    {id:3,name:"1984",age:29,description:"A dystopian social science fiction novel"},
    {id:4,name:"To Kill a Mockingbird",age:41,description:"A novel by Harper Lee"},
    {id:5,name:"The Great Gatsby",age:38,description:"A novel by F. Scott Fitzgerald"}
]

app.get("/user",(req,res)=>{
    res.send(BOOKSTORE);
})

app.get("/user/:id",(req,res)=>{
    // console.log(req.params); 
    const id=parseInt(req.params.id);
    const book=BOOKSTORE.find((bk)=>bk.id===id);
    res.send(book);
    // res.send("Ye lijiye");
})

app.listen(4000,()=>{
    console.log("Server listening on 4000 port number");
})

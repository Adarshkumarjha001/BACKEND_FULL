const expres=require("express");

const app=express();

app.use(express.json());

const BOOKSTORE=[
    {id:1,name:"Harry Porter"}
]

app.listen(4000,()=>{
    console.log("Server listening on 4000 port number");
})

const expres=require("express");

const app=express();

app.use(express.json());

const BOOKSTORE=[]

app.listen(4000,()=>{
    console.log("Server listening on 4000 port number");
})

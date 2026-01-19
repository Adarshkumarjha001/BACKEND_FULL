const expres=require("express");

const app=express();

app.use(express.json());



app.listen(4000,()=>{
    console.log("Server listening on 4000 port number");
})

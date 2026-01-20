const express=require("express");

const app=express();

app.use(express.json());

const BOOKSTORE=[
    {id:1,name:"Harry Porter",age:34,description:"A fantasy novel"},
    {id:2,name:"The Hobbit",age:45,description:"A fantasy novel by J.R.R. Tolkien"},
    {id:3,name:"1984",age:29,description:"A dystopian social science fiction novel"},
    {id:4,name:"To Kill a Mockingbird",age:41,description:"A novel by Harper Lee"},
    {id:5,name:"Harry Porter",age:38,description:"A novel by F. Scott Fitzgerald"}
]

app.get("/user",(req,res)=>{
    res.send(BOOKSTORE);
})

app.get("/user/:id",(req,res)=>{
    // console.log(req.params); id ka value string me aayega req.params se param id ko integer me convert karna padega 
    const id=parseInt(req.params.id);
    const book=BOOKSTORE.find((bk)=>bk.id===id);
    res.send(book);
    // res.send("Ye lijiye");
})

app.get("/user",(req,res)=>{
    const BOOK=BOOKSTORE.filter((bk)=>bk.name===);
}
    )

// YE JO HUMLOG ADD KAR RAHE WOH RAM ME HI STORE HOGA AUR JAB SERVER RESTART HOGA TABH SAB DATA GAYAB HO JAYEGA ISILIYE UPPER 
// BOOKSTORE KO DATABASE ME STORE KARNA CHAHIYE HAMARA UPPER WALA DATA TOH BAS EXAMPLE KE LIYE HAI WOH CONSOLE HAII BASS  so secondary storage ke liye use kar rahe hain humlog
// DATABASE IS ALSO SECONDARY STORAGE
//hum kuch bhi change karenge code me toh server ko restart karna padega tabhi changes reflect honge aue fir se suru se code chalega 

app.post("/user",(req,res)=>{
    BOOKSTORE.push(req.body);
    console.log(req.body);
    //assurance of client that book is added successfully
    res.send("Book added successfully");
})

app.patch("/user",(req,res)=>{
    console.log(req.body);
    const idx=BOOKSTORE.find((bk)=>bk.id===req.body.id);
    if(req.body.name){
        idx.name=req.body.name;
    }
    if(req.body.age){
        idx.age=req.body.age;
    }
    if(req.body.description){
        idx.description=req.body.description;
    }
    
    res.send("PATCH operation successfully done");
})

app.put("/user",(req,res)=>{
    const idx=BOOKSTORE.find((idx)=>idx.id===req.body.id);
    // BOOKSTORE[idx]=req.body;
    idx.name=req.body.name;
    idx.age=req.body.age;
    idx.description=req.body.description;
    res.send("Book updated successfully using put method");
})

app.delete("/user/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const index=BOOKSTORE.findIndex((idx)=>idx.id===id);
    BOOKSTORE.splice(index,1);
    res.send("Book deleted successfully");

})

//inko ek function ki tarah hi treat kar sakte haii  jaise res.send return type maanlo , route ko fn name and req,res ko argument maa

app.listen(4000,()=>{
    console.log("Server listening on 4000 port number");
})



// app.use( ) kewal first part of route ko hi match karta hai woh sochta haii ki baki ka condition andar nested loop me check kar lega isliye ye sabse last me likhna chahiye taaki baki ke routes pehle match ho jayein

// but app.get , app.post , app.put , app.delete ye exact match karte hain poore route ko isliye inhe pehle likhna chahiye taaki ye match ho jayein aur phir app.use likhna chahiye taaki baki ke routes ko handle kar sakein
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
    // console.log(req.params); id ka value string me aayega req.params se param id ko integer me convert karna padega 
    const id=parseInt(req.params.id);
    const book=BOOKSTORE.find((bk)=>bk.id===id);
    res.send(book);
    // res.send("Ye lijiye");
})

// YE JO HUMLOG ADD KAR RAHE WOH RAM ME HI STORE HOGA AUR JAB SERVER RESTART HOGA TABH SAB DATA GAYAB HO JAYEGA ISILIYE UPPER 
// BOOKSTORE KO DATABASE ME STORE KARNA CHAHIYE HAMARA UPPER WALA DATA TOH BAS EXAMPLE KE LIYE HAI WOH CONSOLE HAII BASS  so secondary storage ke liye use kar rahe hain humlog
// DATABASE IS ALSO SECONDARY STORAGE
//hum kuch bhi change karenge code me toh server ko restart karna padega tabhi changes reflect honge 
app.post("/user",(req,res)=>{
    BOOKSTORE.push(req.body);
    res.send("Book added successfully");
})

app.listen(4000,()=>{
    console.log("Server listening on 4000 port number");
})



// app.use( ) kewal first part of route ko hi match karta hai woh sochta haii ki baki ka condition andar nested loop me check kar lega isliye ye sabse last me likhna chahiye taaki baki ke routes pehle match ho jayein

// but app.get , app.post , app.put , app.delete ye exact match karte hain poore route ko isliye inhe pehle likhna chahiye taaki ye match ho jayein aur phir app.use likhna chahiye taaki baki ke routes ko handle kar sakein
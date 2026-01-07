const fs=require('fs');
console.log("This is the hello world file for Activity module");
let a=6;
let b=9;

function sum(a1,b1){
    return a1+b1;
}

console.log(a);

console.log(sum(10,8));

const data = fs.readFileSync("./Text.json","utf-8");
console.log(data);

fs.readFile("./Text.json","utf-8",(err,data)=>{ 
    if(err){
        console.log("Error occurred while reading the file");
    }   
    else{
        console.log(data);
    }
})

setTimeout(()=>{
       console.log("This is printed after 4 seconds");
},4000);

console.log("End of the Activity module code");
console.log(a+b);
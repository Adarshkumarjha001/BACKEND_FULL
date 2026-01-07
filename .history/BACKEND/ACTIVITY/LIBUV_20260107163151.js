const fs=require('fs')
console.log("This is the hello world file for Activity module");
let a=6;
let b=9;

function sum(a1,b1){
    return a1+b1;
}

console.log(a);

console.log(sum(10,8));

setTimeout(()=>{
       console.log("This is printed after 4 seconds");
},4000);

console.log("End of the Activity module code");
console.log(a+b);
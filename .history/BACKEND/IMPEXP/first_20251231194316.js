//1st method for import export is using common js  which also by default node js use.

const {sum}=require("./second");

// import in the form of IFEE 

(function (){
    function sum(a,b){
    return a + b;

}
// console.log("The sum using IFFE is " + sum(5,10) );
}
)()
// sum(5,10);console.log(sum(12,5));

function sub(a,b){
    return a - b;
}
console.log(sub(10,5));







console.log("Welcome to kick off file for Import and Export backend");

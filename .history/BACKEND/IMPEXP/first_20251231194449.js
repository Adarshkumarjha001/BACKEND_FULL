//1st method for import export is using common js  which also by default node js use.

const {sum,sub}=require("./second");

// import in the form of IFEE 

(function (){
    function sum(a,b){
    return a + b;

}
// console.log("The sum using IFFE is " + sum(5,10) );
}
)()

// This is 

console.log(sum(12,5));


console.log(sub(10,5));







console.log("Welcome to kick off file for Import and Export backend");

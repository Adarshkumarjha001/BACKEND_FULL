const express=require("express");

// app is an instance of express application
const app=express();

// This is a middleware to parse JSON bodies from incoming requests and attach them to req.body object in the request object of express and convert it into javascript object
app.use(express.json());

//Database:  in form of an array of objects

const FoodMenu=[
    {id:1,Food:"Pizza",Category:Price:299"},
    
]

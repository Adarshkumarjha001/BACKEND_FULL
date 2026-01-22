const express=require("express");

// app is an instance of express application
const app=express();

// This is a middleware to parse JSON bodies from incoming requests and attach them to req.body object in the request object of express and convert it into javascript object
app.use(express.json());

//Database:  in form of an array of objects

const FoodMenu=[
    {id:1,Food:"Pizza",Price:299,Description:"Delicious cheese pizza"},
    {id:2,Food:"Burger",Price:199,Description:"Juicy beef burger"},
    {id:3,Food:"Pasta",Price:249,Description:"Italian pasta with marinara sauce"},
    {id:4,Food:"Salad",Price:149,Description:"Fresh garden salad"},
    {id:5,Food:"Sushi",Price:399,Description:"Assorted sushi platter"},
    {id:6,Food:"Rice",Price:199,Description:"Healthy basmati rice"},
    {id:7,Food:"Pancakes",Price:249,Description:"Fluffy pancakes with maple syrup"},
]

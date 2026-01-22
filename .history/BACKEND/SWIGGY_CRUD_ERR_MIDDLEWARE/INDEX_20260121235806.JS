const express=require("express");

// app is an instance of express application
const app=express();

// This is a middleware to parse JSON bodies from incoming requests and attach them to req.body object in the request object of express and convert it into javascript object
app.use(express.json());

//Database:  in form of an array of objects

const FoodMenu=[
    {id:1,Food:"Pizza",Category:"Veg",Price:299},
    {id:2,Food:"Burger",Category:"Non-Veg",Price:199},
    {id:3,Food:"Pasta",Category:"Veg",Price:249},
    {id:4,Food:"Salad",Category:"Veg",Price:149},
    {id:5,Food:"Sushi",Category:"Non-Veg",Price:399},
    {id:6,Food:"Rice",Category:"Veg",Price:199},
    {id:7,Food:"Pancakes",Category:"Veg",Price:249},
    {id:8,Food:"Tacos",Category:"Non-Veg",Price:299},
    {id:9,Food:"Sushi",Category:"Non-Veg",Price:399},
    {id:10,Food:"Rice",Category:"Veg",Price:199},
    {id:11,Food:"Pancakes",Category:"Veg",Price:249},
    {id:12,Food:"Tacos",Category:"Non-Veg",Price:299},
    {id:13,Food:"Pizza",Category:"Veg",Price:299},
    {id:14,Food:"Burger",Category:"Non-Veg",Price:199},
    {id:15,Food:"Pasta",Category:"Veg",Price:249},    
    {id:16,Food:"Salad",Category:"Veg",Price:149},
]


const Add
const express=require("express");

// app is an instance of express application
const app=express();

// This is a middleware to parse JSON bodies from incoming requests and attach them to req.body object in the request object of express
app.use(express.json());

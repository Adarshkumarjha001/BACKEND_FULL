import { json } from "stream/consumers";

const express=require("express");

// app is an instance of express application
const app=express();

const {Auth}=require("./AUTHENTICATION/Auth");

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


// jab bhi koii user koi food item ko add to cart karega toh uska data iss array me store hoga

const AddToCart=[];

// 1.) both user and admin can see all the food items available in the menu or in database

app.get("/food",(req,res)=>{
    res.status(200).send(FoodMenu);
})

// 2.) admin can add a new food item to the menu

// EK MIDDLEWARE BANATE HAIN JO KI ADMIN KO AUTHENTICATE KAREGA KI WOH HI ADMIN HAI AUR USI KO NAYA FOOD ITEM ADD KARNE KA ACCESS DENA HAI TAKI BAAR BAAR NA LIHNA PARE

// app.use("/admin",(req,res,next)=>{
//     //pehle hume admin ko authenticate karna padega fir hi woh naya food item add kar payega naii toh koii bhi localhost:4000/admin pe jaake naya food item add kar sakta hai
//     // pehle authentication karenge fir aage badhenge
//     //Dummy Authentication
//     const token="ABC";
//     const Access=token==="ABC"?1:0;
//     if(!Access){
//         return res.status(403).send("Unauthorized Access! Only Admins can add new food items");
//     }
//     next();
// })

// shortcut

app.use("/admin",Auth);

app.post("/admin",(req,res)=>{
    //pehle hume admin ko authenticate karna padega fir hi woh naya food item add kar payega naii toh koii bhi localhost:4000/admin pe jaake naya food item add kar sakta hai
    // pehle authentication karenge fir aage badhenge
    //Dummy Authentication
    // const token="ABC";
    // const ACCESS=token==="ABC"?1:0;
    // if(ACCESS){
    //     console.log(req.body);
        FoodMenu.push(req.body);
        res.status(201).send("New Food Item Added Successfully");
    // }else{
    //     res.status(403).send("Unauthorized Access! Only Admins can add new food items");
    // }
})

// 3> admin to delete a food item from the menu

app.delete("/admin/:id",(req,res)=>{
     //pehle hume admin ko authenticate karna padega fir hi woh naya food item add kar payega naii toh koii bhi localhost:4000/admin pe jaake naya food item add kar sakta hai
    // pehle authentication karenge fir aage badhenge
    //Dummy Authentication
    // const token="ABC";
    // const ACCESS=token==="ABC"?1:0;
    // if(ACCESS){
    const id=parseInt(req.params.id);
    const idx=FoodMenu.findIndex((food)=>food.id===id);
    if(idx!==-1){
        FoodMenu.splice(idx,1);
        res.status(200).send("Food Item Deleted Successfully");
    }
// }else{
//         res.status(404).send("Food Item Not Found");
//     }
})

// 4> admin to update some part of food item like price or category

app.patch("/admin",(req,res)=>{
     //pehle hume admin ko authenticate karna padega fir hi woh naya food item add kar payega naii toh koii bhi localhost:4000/admin pe jaake naya food item add kar sakta hai
    // pehle authentication karenge fir aage badhenge
    //Dummy Authentication    
    // const token="ABC";    
    // const ACCESS=token==="ABC"?1:0;    
    // if(ACCESS){
    const id=parseInt(req.params.id);
    // object hamesha pass by reference hota hai isliye humlog direct uske properties ko change kar sakte hain
    const foodtoupdate=FoodMenu.find((food)=>food.id===id);
    if(idx!==-1){
        if(req.body.Price){
            foodtoupdate.Price=req.body.Price;
        }
        if(req.body.Category){
            foodtoupdate.Category=req.body.Category;                
        }
        if(req.body.Food){
            foodtoupdate.Food=req.body.Food;                
        }
        res.status(200).send("Food Item Updated Successfully");
    }

// }else{
//         res.status(403).send("Unauthorized Access! Only Admins can update food items");
//     }
})


//Ab user ka kaam 
// 1) add to cart

app.post("/user/:id",(req,res)=>{
    const idx=parseInt(req.params.id);
    const FoodItem=FoodMenu.find((item)=>item.id===idx);
    if(FoodItem){
        AddToCart.push(FoodItem);
        res.status(201).send("Food Item Added to Cart Successfully");
    }
    else{
        res.status(404).send("Food Item Not Found");
    }
})

// 2 delete from cart

app.delete("/user/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const idx=AddToCart.findIndex((item)=>item.id===id);
    if(idx!==-1){
        AddToCart.splice(idx,1);
        res.status(200).send("Food Item Deleted from Cart Successfully");
    }
    else{
        res.status(404).send("Food Item Not Found");
    }
})

// 3 view cart

app.get("/user",(req,res)=>{
    if(AddToCart.length===0){
        return res.status(200).send("Your Cart is Empty");
    }
    else{
        return res.status(200).send(AddToCart);
    }
})


// handling errors using middleware

app.get("/dummy",(req,res)=>{   
    try{
        json.parse("{name: 'John'}"); // Invalid JSON format
    }
})
app.listen(4000,()=>{
    console.log("Server is listening on port 4000");
})



//Status code codes:  we need to send status code with every response if we do not send frontend has to compare with res.sed() data to check whether request is successful or not
//Sttaus code tell frontend about the status of the request whether it is successful or failed and frontend act accordiingly
// 200: OK   
// 201: Created
// 204: No Content
// 400: Bad Request
// 401: Unauthorized
// 403: Forbidden
// 404: Not Found
// 500: Internal Server Error
const Auth=(req,res,next)=>{
    //pehle hume admin ko authenticate karna padega fir hi woh naya food item add kar payega naii toh koii bhi localhost:4000/admin pe jaake naya food item add kar sakta hai
    // pehle authentication karenge fir aage badhenge
    //Dummy Authentication
    const token="ABC";
    const Access=token==="ABC"?1:0;
    if(!Access){
        return res.status(403).send("Unauthorized Access! Only Admins can add new food items");
    }
    next();
}

module.exports=[Auth;
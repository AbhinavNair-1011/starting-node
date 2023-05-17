const {carts,Carts}=require("../models/cart");

module.exports= function fetchFromDatabase(req,res,next){
    // console.log(req.query.email)
Carts.fetchFromDatabase(req.query.email)
.then(result=>{
   return res.json({
        status:"successfull",
        data:result
    })
})

}
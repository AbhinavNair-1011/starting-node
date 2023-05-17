
const {products,Products}=require("../models/product");

module.exports.homePage=(req,res,next)=>{
   Products.fetchAll()
   .then(result=>{

    res.json({
        status:"successfull",
        data:result
    })
   })
   .catch(err=>console.log(err))
    
 }
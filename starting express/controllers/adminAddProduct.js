
const {product,Products}=require("../models/product")

module.exports.addProducts=(req,res,next)=>{
    let data=req.body;
    console.log(data)
    let product = new Products(data.productTitle,data.productDescription,data.productImageUrl)
    product.insertIntoDatabase()
    res.json({
        status:"successfull",
        data:req.body
    })
    
}
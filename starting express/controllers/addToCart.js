const {carts,Carts}=require("../models/cart");

module.exports.addToCart=(req,res,next)=>{
    let email=req.body.userEmail;
    let name=req.body.productName;
    console.log(req.body);
    Carts.insertIntoDatabase(email,name)
    .then(data=>{
       
          carts.create({
            userId:data.user.dataValues.id,
            productId:data.product.dataValues.id
          })
        return res.json({
            status:"successfull"
        })
    })
  
}
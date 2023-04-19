const path=require("path");
const product=require("../models/product")

exports.addProducts=(req,res,next)=>{
    res.sendFile(path.join(__dirname,"..","views","add-products.html"))
}
exports.product=(req,res,next)=>{
    let pro= new product(req.body.title);
        pro.saveToFile();
        product.fetchAll();
    res.redirect("/")
 }
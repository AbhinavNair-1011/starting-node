const path=require("path");


exports.addProducts=(req,res,next)=>{
    res.sendFile(path.join(__dirname,"..","views","add-products.html"))
}
exports.product=(req,res,next)=>{
    console.log(JSON.stringify(req.body));
    res.redirect("/")
 }
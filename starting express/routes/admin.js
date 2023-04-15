const express= require("express");

const router= express.Router();

router.get("/add-products",(req,res,next)=>{
    res.send(`<form action="/admin/product" method="POST"> <input name="title" type="text" >
    <input type="submit" value="submit"> </form>`)})

router.post("/product", (req,res,next)=>{
       console.log(req.body);
       res.redirect("/")
    });

    module.exports=router;

    
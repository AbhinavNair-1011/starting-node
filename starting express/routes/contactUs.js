const express=require("express");
const router=express.Router();
const path=require("path");

router.get("/contactUs",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"..","views","contactUs.html"))
})

module.exports=router;
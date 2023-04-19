const express=require("express");
const router=express.Router();
const path=require("path");
const controller=require("../controllers/contactUs")

router.get("/contactUs",controller.contactUs)

router.post("/contactUs",(req,res,next)=>{
    res.redirect("/")
})

module.exports=router;
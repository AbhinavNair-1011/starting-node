const express=require("express");
const router=express.Router();
const path=require("path");
const controller=require("../controllers/shop")

router.get("/",controller.homePage)



 module.exports= router;
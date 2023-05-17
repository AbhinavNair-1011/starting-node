const express=require("express");
const router=express.Router();
const controller=require("../controllers/shop")

router.get("/api/fetch-products",controller.homePage)



 module.exports= router;
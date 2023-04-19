const express= require("express");
const path=require("path");
const router= express.Router();
const controller=require("../controllers/admin")

router.get("/add-products",controller.addProducts)

router.post("/product", controller.product);

    module.exports=router;

    
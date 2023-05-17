const express= require("express");
const router= express.Router();
const controller=require("../controllers/adminAddProduct")



router.post("/api/add-product", controller.addProducts);

    module.exports=router;

    
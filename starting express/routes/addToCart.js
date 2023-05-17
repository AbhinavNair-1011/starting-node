const router=require("express").Router();
const controller=require("../controllers/addToCart")

router.post("/api/addToCart",controller.addToCart)

module.exports=router;
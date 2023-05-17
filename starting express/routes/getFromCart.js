const router=require("express").Router();
const controller=require("../controllers/fetchFromCart");

router.get("/api/getCart",controller);

module.exports=router;

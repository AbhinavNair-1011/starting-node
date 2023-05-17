const express=require("express");
const router=express.Router();
const controller=require("../controllers/validateUserController")

router.post("/api/validate-user",controller.validateUser)

module.exports=router;
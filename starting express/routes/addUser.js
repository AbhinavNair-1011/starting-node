const express=require("express");
const router=express.Router();
const controller=require("../controllers/addUserController");

router.post("/api/add-user",controller.addUser);
module.exports=router;
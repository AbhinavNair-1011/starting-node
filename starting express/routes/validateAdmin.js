const express=require("express");
const router=express.Router();
const controller=require("../controllers/validateAdminController")

router.post("/api/validate-admin",controller.validateAdmin)

module.exports=router;
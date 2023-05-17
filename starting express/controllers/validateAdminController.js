const {admins,Admins}=require("../models/admin");

module.exports.validateAdmin=(req,res,next)=>{
    console.log(req.body)
    let email=req.body.email;
    let password=req.body.password;

    Admins.validateAdmin(email)
    .then(result=>{
        console.log(result)
        let data=result.dataValues;
      
        if(email===data.email&&password===data.password){
            return res.json({
                status:"authorization successfull",
                statusCode:1,
                username:data.name,
                email:data.email
            })
        }else{
            return res.json({
                status:"incorrect password entered",
                statusCode:0
            })

        }
    
    })
    .catch(err=>{
       return res.json({
            status:"failed",
            errorMsg:"user not found" })
    })

    
    }
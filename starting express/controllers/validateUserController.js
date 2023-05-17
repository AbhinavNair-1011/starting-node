const {user,Users}=require("../models/users")

module.exports.validateUser=(req,res,next)=>{
    
    let email=req.body.email;
    let password=req.body.password;

    Users.validateUser(email)
    .then(result=>{
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
            errorMsg:"user not found"
        })
    })

    
    }
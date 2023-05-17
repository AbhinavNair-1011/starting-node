const {Users}=require("../models/users");

module.exports.addUser=(req,res,next)=>{
 let name=req.body.name;
 let email=req.body.email;
 let dob=req.body.dob;
 let password=req.body.password
 

let user=new Users(name,email,dob,password);
 user.addUserToDatabase()
 .then(data=>{
    return res.json({
        status:"success",
        data:data
    })

 })
 .catch(err=>{
    console.log(err)
return res.json({
    status:"failed",
    errorMsg:err
})
 })
}
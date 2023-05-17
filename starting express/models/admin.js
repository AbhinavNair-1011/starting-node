const sequelize=require("../database/database")
const Sequelize=require("sequelize")

const admins=sequelize.define('admins',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
  },
  email:{
   type:Sequelize.STRING,
   unique:true,
   allowNUll:false
   
  },
 dob:{
   type:Sequelize.DATEONLY,
   allowNull:false
 },
 password:{
   type:Sequelize.STRING,
   allowNull:false
 }
})

class Admins{
    constructor(name,email,dob,password){
        this.name=name;
        this.email=email;
        this.dob=dob;
        this.password=password;
    }
   

    static validateAdmin(email){
return admins.findOne({where:{
    email:email
}})
    }
    

}

module.exports={admins,Admins}

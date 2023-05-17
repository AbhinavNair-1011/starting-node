const Sequelize=require("sequelize");
const sequelize=require("../database/database");


const users=sequelize.define("users",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
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

class Users{
    constructor(name,email,dob,password){
        this.name=name;
        this.email=email;
        this.dob=dob;
        this.password=password;
    }
    addUserToDatabase(){
return users.create({
    name:this.name,
    email:this.email,
    dob:this.dob,
    password:this.password
})
    }

    static validateUser(email){
return users.findOne({where:{
    email:email
}})
    }
    



}
module.exports={users,Users};
const Sequelize=require('sequelize')
 
const sequelize=new Sequelize("shop","root","Abhinav@1011",{
    dialect:"mysql",
    host:"localhost"
    
});


module.exports=sequelize;
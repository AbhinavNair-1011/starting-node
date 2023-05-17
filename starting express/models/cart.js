const Sequelize=require("sequelize");
const sequelize=require("../database/database");
const {products}=require("./product");
const {users}=require("./users");

const carts=sequelize.define("carts",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    }

})
products.hasMany(carts);
carts.belongsTo(users);



 
class Carts{
    constructor(productName,userEmail){
        this.productName=productName;
        this.userEmail=userEmail;
    }
    static insertIntoDatabase(email,name){
 let user,product;
    return products.findOne({
        where:{productName:name}
    })
    .then(res=>{
        product=res;
        return users.findOne({
            where:{email:email}
        })
    })
    .then(res=>{
        user=res;
        return {user,product}
    })

    }
    static fetchFromDatabase(email){
              return users.findOne({
                where:{email:email}
              })
              .then(res=>{
                return carts.findAll({where:{
                    userId:res.dataValues.id
                }})
              })
              .then(result=>{
                // console.log(result)
                let prods=[];
                for(let each of result){
                 prods.push(products.findOne({
                    where:{id:each.dataValues.productId}
                
                })
                 )
            }
            return Promise.all(prods)
               
            
            })
    }
}

module.exports={carts,Carts};


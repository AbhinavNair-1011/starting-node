const Sequelize= require("sequelize");

const sequelize=require("../database/database")

const products=sequelize.define("products",{
id:{
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement:true,
    primaryKey:true
},
productName: {
    type:Sequelize.STRING,
    allowNull:false
},
productDescription:{
type:Sequelize.STRING,
allowNull:false
},
productImageUrl:{
type:Sequelize.STRING,
allowNull:false
}
})
class Products{
constructor(productName,productDescription,productImageUrl){
    this.productName=productName;
    this.productDescription=productDescription;
    this.productImageUrl=productImageUrl;
}
insertIntoDatabase(){
    products.create({
        productName:this.productName,   
        productDescription:this.productDescription,
        productImageUrl:this.productImageUrl

    })
}
static fetchAll(){
    return products.findAll()    
}

}

module.exports={products,Products};
const Sequelize= require("sequelize");

const sequelize=require("../database/database")

const products=sequelize.define("products",{
id:{
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement:true,
    primaryKey:true
},
title: {
    type:Sequelize.STRING,
    allowNull:false
}
})

module.exports=products;
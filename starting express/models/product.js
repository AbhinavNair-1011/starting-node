// const products=[]
const { log } = require("console");
const fs=require("fs");


class product{
  static productList=[];
    constructor(title){
        this.title=title;
        
    }
    saveToFile(){
 
        const data=fs.readFileSync(__dirname+"/../productData/productList.json",(err)=>{
            if (err) console.log(err)


        })
        if(data.toString().length!==0){

            product.productList=JSON.parse(data);
        }
       
            
      
        
        product.productList.push(this)
    fs.writeFileSync(__dirname+"/../productData/productList.json", JSON.stringify(product.productList))
    
       
      
       
     }
   static fetchAll(){
    fs.readFile(__dirname+"/../productData/productList.json","utf-8",(err,data)=>{
        if(data.toString().length!==0){
      console.log(JSON.parse(data));
        }else{
            console.log("no products added yet")
        }
    })
   }
}

module.exports=product;

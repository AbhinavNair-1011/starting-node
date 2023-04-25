const db=require("../database/database")

class product{
  
    constructor(title){
        this.title=title;
        
    }
    insertIntoDatabase(){
        return db.execute(`INSERT INTO products (\`product name\`) VALUES ('${this.title}')`)
       
       
     }
   static fetchAll(){
    return db.execute(`SELECT * FROM products`)
    
   }
   static deleteAll(){
    db.execute(`TRUNCATE products`)
   }
}

module.exports=product;

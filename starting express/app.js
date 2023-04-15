const http=require("http");
const express=require("express");
 const bodyParser=require("body-parser")
const app=express();
const server=http.createServer(app);

const adminRouter= require("./routes/admin");
const shopRouter= require("./routes/shop");

app.use(bodyParser.urlencoded({extended:false}));

 
app.use("/admin",adminRouter);
app.use(shopRouter);

 app.use((req,res,next)=>{
    res.status(404).send("404 page not found")
 })



server.listen(3000,()=>{
console.log("server started");
})
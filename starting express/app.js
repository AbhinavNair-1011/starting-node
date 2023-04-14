const http=require("http");
const express=require("express");
 const bodyParser=require("body-parser")
const app=express();
const server=http.createServer(app);

app.use(bodyParser.urlencoded({extended:false}));

app.use("/add-products",(req,res,next)=>{
 res.send(`<form action="/product" method="POST"> <input name="title" type="text" ><input type="submit" value="submit"> </form>`)
})
 app.post("/product", (req,res,next)=>{
    console.log(req.body);
    res.redirect("/")
 })
 app.use("/",(req,res,next)=>{
    res.send("hello express")
 })



server.listen(3000,()=>{
console.log("server started");
})
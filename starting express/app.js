const http=require("http");
const express=require("express");
 const bodyParser=require("body-parser")
const app=express();
const server=http.createServer(app);
const path=require("path")

const adminRouter= require("./routes/admin");
const shopRouter= require("./routes/shop");
const contactUs= require("./routes/contactUs")
const errorPage=require("./routes/errorPage")

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,"public")));

app.use(shopRouter);
app.use("/admin",adminRouter);
app.use(contactUs)

app.use(errorPage)






server.listen(3000,()=>{
console.log("server started");
})
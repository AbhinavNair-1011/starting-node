const http=require("http");
const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const server=http.createServer(app);
const path=require("path");
const sequelize=require("./database/database");

// const cart=require("./models/cart")



const adminRouter= require("./routes/adminAddProduct");
const shopRouter= require("./routes/shop");
const contactUs= require("./routes/contactUs")
const errorPage=require("./routes/errorPage")
const validateUser=require("./routes/validateUser");
const validateAdmin=require("./routes/validateAdmin");
const addUser=require("./routes/addUser")
const addToCart=require("./routes/addToCart");
const getCart=require("./routes/getFromCart")


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,"public")));


//initial routing until seperate deployment

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/views/index.html")
})
app.use(validateAdmin);
app.use(validateUser);
app.use(addUser)
app.use(shopRouter);
app.use(adminRouter);
// app.use(contactUs);
// app.use(errorPage);
app.use(addToCart);
app.use(getCart);


sequelize.sync().then((result)=>{
    
    server.listen(3000,()=>{
        console.log("server started");
        })
})
.catch(err=>console.log(err))


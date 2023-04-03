const http=require("http")


const eventHandler=require("./routes.js")

const server=http.createServer(eventHandler)
server.listen(3000,()=>{
    console.log("listening to port 3000")
})
const http=require("http")
const fs=require("fs");

const server=http.createServer((req,res)=>{
const url=req.url;
const method=req.method;

if(url==="/"){

    res.writeHead(200,{"Content-Type":"text/html"})
    fs.readFile(__dirname+"/write.txt",{encoding:"utf-8"},(err,data)=>{
        if (err) console.log(err);
        fileData=data
    
        res.write(`<pre>${data}<pre>`)
        res.write("<form action='/message' method='post'><input type='text' name='message'><input type='submit'></form>")
        return res.end()
    })


    
    }else if(url==="/message" && method==="POST"){
        
        let body=[];
        req.on("data",(chunk)=>{
        body.push(chunk)

        });

      return req.on("end", ()=>{
     let parsedBody= Buffer.concat(body).toString();
  let message= parsedBody.split("=")[1];
  fs.appendFile("write.txt",message+"\n",()=>{

          res.statusCode=302;
          res.setHeader("location","/")
        return res.end();
  })
})
}
    
})
server.listen(3000,()=>{
    console.log("listening to port 3000")
})
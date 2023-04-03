// //run node index.js in terminal , node must be installed 


// console.log("hello sir");

// let result=(a,b)=>{
// return `\nsum - ${a+b}`
// }

// let studentObj={name:"abhinav" ,age:21}

// console.log(`my name is ${studentObj.name} and age is ${studentObj.age}`)
// console.log(result(1,2))

// // task 3
// let array1= ["apple","orange","","mango","","lemon"];

// let array2= array1.map((each)=>{
//     if(each===""){
//         each="empty string"
//     }
//     return each
// })
// console.log(`old array-${array1} \n\nmodified new array-${array2}\n`);

// //spread op

// let array3= [...array2];
// console.log("used spread op " +array3)

// //rest op
//  function a(...rest){
// //     for(let each of rest){
// // console.log(each)
// //     }
//     console.log( "used rest op"+rest);
//  }
//  a(1,2,3,4,5,6,7,8,9)



 //creating a server 

 let http=require("http")
 let server= http.createServer((req,res)=>{
   if(req.url==="/home"){
    res.setHeader("Content-Type","text/html")
    res.write("<p>Welcome home</p>")
    res.end()
   }else if(req.url==="/about"){
    res.setHeader("Content-Type","text/html")
    res.write("<p>Welcome to About Us</p>")
    res.end()
   }else if(req.url==="/node"){
    res.setHeader("Content-Type","text/html")
    res.write("<p>Welcome to my Node js project</p>")
    res.end()

   }else{
    res.setHeader("Content-Type","text/html")
    res.write("<p>404 not found try typing /home or /node or/about</p>")
    res.end()
   }
    
 })
 server.listen(3000,()=>{
   console.log("i love you 3000  -tony stark")
 })

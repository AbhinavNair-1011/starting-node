//run node index.js in terminal , node must be installed 


console.log("hello sir");

let result=(a,b)=>{
return `\nsum - ${a+b}`
}

let studentObj={name:"abhinav" ,age:21}

console.log(`my name is ${studentObj.name} and age is ${studentObj.age}`)
console.log(result(1,2))

// task 3
let array1= ["apple","orange","","mango","","lemon"];

let array2= array1.map((each)=>{
    if(each===""){
        each="empty string"
    }
    return each
})
console.log(`old array-${array1} \n\nmodified new array-${array2}\n`);

//spread op

let array3= [...array2];
console.log("used spread op " +array3)

//rest op
 function a(...rest){
//     for(let each of rest){
// console.log(each)
//     }
    console.log( "used rest op"+rest);
 }
 a(1,2,3,4,5,6,7,8,9)
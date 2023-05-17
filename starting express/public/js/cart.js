async function getCartProduct(email,name){
    return await axios.get("http://localhost:3000/api/getCart",{
        params:{
            email:email
               }
    })
}

window.addEventListener("DOMContentLoaded",()=>{
    let addProduct=document.querySelector("#addProduct")
    let contactUs=document.querySelector("#contactUs")
    let  cart=document.querySelector("#cart");
    
    
    let checkAdmin=sessionStorage.getItem("admin");
        if(checkAdmin!="false"){
            contactUs.style.display="none";
            cart.style.display="none"
        }else if(checkAdmin=="false"){
        addProduct.style.display="none"
    }
   
    let cartList=document.querySelector("#cartList");

    getCartProduct(sessionStorage.getItem("email"))
    .then(result=>{
        console.log(result);
        
        for (let each of result.data.data){
            // console.log(each.productName)
        let li=document.createElement("li")
         li.innerText=each.productName;
         li.setAttribute("class","li")
         cartList.appendChild(li)
        }


    })
    .catch(err=>console.log(err))

  

})
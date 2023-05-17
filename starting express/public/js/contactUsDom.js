window.addEventListener("DOMContentLoaded",(e)=>{
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
})
async function addProduct(details){
return axios.post("http://localhost:3000/api/add-product",details)
}



window.addEventListener("DOMContentLoaded",(e)=>{
    let productTitle=document.querySelector("#productTitle")
    let productDescription=document.querySelector("#productDescription")
    let productImageUrl=document.querySelector("#productImageUrl")

    productTitle.value="";
            productDescription.value="";
            productImageUrl.value="";

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
    let submitBtn=document.querySelector(".form__submit");

    submitBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        let productTitle=document.querySelector("#productTitle").value
    let productDescription=document.querySelector("#productDescription").value
    let productImageUrl=document.querySelector("#productImageUrl").value

        
        let details={productTitle,productDescription,productImageUrl};
        addProduct(details)
        .then(result=>{
            console.log(result)
            alert("product inserted successfully")
        document.querySelector("#productTitle").value="";
        document.querySelector("#productDescription").value="";
        document.querySelector("#productImageUrl").value="";
        

          
        })
        .catch(err=>{
            console.log(err)
        })

    })

    let logout=document.querySelector("#logout");

    logout.addEventListener("click",(e)=>{
        sessionStorage.clear()
    })

})
async function fetchAll() {
    return axios.get("http://localhost:3000/api/fetch-products")
}

async function  addToCart(userEmail,productName){
   return axios.post("http://localhost:3000/api/addToCart",{userEmail,productName}) 
}

window.addEventListener("DOMContentLoaded", (e) => {

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

    fetchAll()
        .then(result => {
           let productsDiv=document.querySelector(".products");
           let data=result.data.data
           
            for(let each of data){

            let div=document.createElement("div");
            let h3=document.createElement("h3") ;
            let p=document.createElement("p");
            let image=document.createElement("img");

            
              let cartButton=document.createElement("button");


              cartButton.innerText="Add to Cart";
              cartButton.setAttribute("class","cartButton")
            
            

            h3.innerText=each.productName;
            p.innerText=each.productDescription;
            image.setAttribute("src",each.productImageUrl)

            div.setAttribute("class","product")
            h3.setAttribute("class","product_name")
            p.setAttribute("class","product_description")
            image.setAttribute("class","product_image")

            div.appendChild(image)
            div.appendChild(h3)
            div.appendChild(p)
            if(sessionStorage.getItem("admin")=="false"){
              div.appendChild(cartButton)
            }
          
            productsDiv.appendChild(div)
    
            }

       productsDiv.addEventListener("click",(e)=>{
        if(e.target.classList.contains("cartButton")){
        let productName=e.target.parentElement.children[1].innerText;
        let userEmail=sessionStorage.getItem("email");
          addToCart(userEmail,productName)
          .then(result=>{
            alert("added to cart")
            console.log(result);
          })
          .catch(err=>{
            console.log(err);
          })
        }
      })
    

        })
        .catch(err => {
            console.log(err)
        })

         
      
        let logout=document.querySelector("#logout");

        logout.addEventListener("click",(e)=>{
            sessionStorage.clear()
        })
})


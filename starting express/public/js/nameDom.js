async function addUser(userDetails) {
    return await axios.post("http://localhost:3000/api/add-user", userDetails)
}

async function validateUser(userDetail) {
    return await axios.post("http://localhost:3000/api/validate-user", userDetail);

}
async function validateAdmin(userDetail) {
    return await axios.post("http://localhost:3000/api/validate-admin", userDetail);

}



window.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();
    let name = document.querySelector("#name");
    let email = document.querySelector("#email")
    let dob = document.querySelector("#dob");
    let password = document.querySelector("#password")

    let register = document.querySelector("#register")
    let login = document.querySelector("#login")

    let registerForm = document.querySelector("#registerForm")

    let loginForm = document.querySelector("#loginForm")


    register.addEventListener("click", (e) => {
        e.preventDefault()
        registerForm.style.zIndex = 2;
        loginForm.style.zIndex = 1;
    })

    login.addEventListener("click", (e) => {
        e.preventDefault()
        registerForm.style.zIndex = 1;
        loginForm.style.zIndex = 2;

    })



    let registerBtn = document.querySelector("#submit");

    registerBtn.addEventListener("click", (e) => {
        e.preventDefault()
        if (name.value && email.value && dob.value && password.value) {
            let userDetails = {
                name: name.value,
                email: email.value,
                dob: dob.value,
                password: password.value
            }
            addUser(userDetails);
            loginForm.style.zIndex = 3;
        } else {
            alert("enter all the details")
        }
    })


    let loginBtn = document.querySelector("#loginSubmit");

    loginBtn.addEventListener("click", (e) => {
        e.preventDefault()
        let loginEmail = document.querySelector("#loginEmail").value
        let loginPassword = document.querySelector("#loginPassword").value
        

        let userDetail = {
            email: loginEmail,
            password: loginPassword
        }
        validateUser(userDetail)
            .then(result => {
                if (result.data.statusCode === 0) {

                    alert("incorrect password, please try again")
                    loginPassword = ""
                } else if (result.data.statusCode === 1) {
                    window.location.href = "../views/shop.html"
                   sessionStorage.setItem("username",result.data.username);
                   sessionStorage.setItem("email",result.data.email);
                   sessionStorage.setItem("admin","false")

                
                } else if (result.data.errorMsg === "user not found") {
                    alert("incorrect user email")
                }
            })
            .catch(err => {
                console.log(err)
    
            })

    })
    
    let adminLoginBtn=document.querySelector("#adminLoginSubmit");

    adminLoginBtn.addEventListener("click",(e)=>{
        e.preventDefault()
        let loginEmail = document.querySelector("#loginEmail").value
        let loginPassword = document.querySelector("#loginPassword").value
        
console.log(loginEmail,loginPassword)
        let userDetail = {
            email: loginEmail,
            password: loginPassword
    
        }
        validateAdmin(userDetail)
            .then(result => {
                if (result.data.statusCode === 0) {

                    alert("incorrect password, please try again")
                    loginPassword = ""
                } else if (result.data.statusCode === 1) {
                    window.location.href = "../views/shop.html"
                    sessionStorage.setItem("admin","true")
                   sessionStorage.setItem("username",result.data.username);
                   sessionStorage.setItem("email",result.data.email);

                
                } else if (result.data.errorMsg === "user not found") {
                    alert("incorrect user email")
                }
            })
            .catch(err => {
                console.log(err)
    
            })
    })

})
var olho = document.querySelector("#senha-login-user")
var img = document.querySelector("#olho")
function ver(){
    if(olho.type == "password"){
        olho.type = "text" 
        img.src = "../../../assets/invisivel.png"
    }else{
        olho.type = "password"
        img.src = "../../../assets/olho.png"
    }
}
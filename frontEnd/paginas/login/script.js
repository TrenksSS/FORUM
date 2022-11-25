var olho = document.querySelector("#senha-login-user")
var img = document.querySelector("#olho")
var cad = document.querySelector(".modal-cadastro")
var log = document.querySelector(".modal-login")
function ver(){
    if(olho.type == "password"){
        olho.type = "text" 
        img.src = "../../../assets/invisivel.png"
    }else{
        olho.type = "password"
        img.src = "../../../assets/olho.png"
    }
}
 function cadastrar() {
    log.style = "display:none"
    cad.style = "display:flex"
 }

 function voltaLog() {
    log.style = "display:flex"
    cad.style = "display:none"
 }